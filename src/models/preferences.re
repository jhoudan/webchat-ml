type t = {
  accentColor: string,
  complementaryColor: string,
  botMessageColor: string,
  botMessageBackgroundColor: string,
  backgroundColor: string,
  headerLogo: string,
  headerTitle: string,
  botPicture: string,
  userPicture: string,
  onboardingMessage: string,
  expanderLogo: string,
  expanderTitle: string,
  conversationTimeToLive: int,
  openingType: string,
  welcomeMessage: option(string),
};

module Decode {
  type result = {
    results: t,
    message: string,
  };

  let preferences = json =>
    Json.Decode.{
      accentColor: json |> field("accentColor", string),
      complementaryColor: json |> field("complementaryColor", string),
      botMessageColor: json |> field("botMessageColor", string),
      botMessageBackgroundColor: json |> field("botMessageBackgroundColor", string),
      backgroundColor: json |> field("backgroundColor", string),
      headerLogo: json |> field("headerLogo", string),
      headerTitle: json |> field("headerTitle", string),
      botPicture: json |> field("botPicture", string),
      userPicture: json |> field("userPicture", string),
      onboardingMessage: json |> field("onboardingMessage", string),
      expanderLogo: json |> field("expanderLogo", string),
      expanderTitle: json |> field("expanderTitle", string),
      conversationTimeToLive: json |> field("conversationTimeToLive", int),
      openingType: json |> field("openingType", string),
      welcomeMessage: json |> optional(field("welcomeMessage", string)),
    };

  let result = json => {
    Json.Decode.{
      results: json |> field("results", preferences),
      message: json |> field("message", string),
    };
  };
}

module Api {
  let fetch = ({channelid, token}: Types.credentials) => {
    let url = {j|https://api.recast.ai/connect/v1/webhook/$channelid/preferences|j};
    Js.Promise.(
      Fetch.fetchWithInit(
        url,
        Fetch.RequestInit.make(
          ~headers=Fetch.HeadersInit.make({"Authorization": token}),
          ()
        ),
      )
      |> then_(Fetch.Response.json)
      |> then_(json => json |> Decode.result |> (result => Some(result.results)) |> resolve)
      |> catch(err => resolve(None))
    );
  }
};
