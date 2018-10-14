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

module Decode = {
  let preferences = json =>
    Json.Decode.{
      accentColor: json |> at(["results", "accentColor"], string),
      complementaryColor:
        json |> at(["results", "complementaryColor"], string),
      botMessageColor: json |> at(["results", "botMessageColor"], string),
      botMessageBackgroundColor:
        json |> at(["results", "botMessageBackgroundColor"], string),
      backgroundColor: json |> at(["results", "backgroundColor"], string),
      headerLogo: json |> at(["results", "headerLogo"], string),
      headerTitle: json |> at(["results", "headerTitle"], string),
      botPicture: json |> at(["results", "botPicture"], string),
      userPicture: json |> at(["results", "userPicture"], string),
      onboardingMessage:
        json |> at(["results", "onboardingMessage"], string),
      expanderLogo: json |> at(["results", "expanderLogo"], string),
      expanderTitle: json |> at(["results", "expanderTitle"], string),
      conversationTimeToLive:
        json |> at(["results", "conversationTimeToLive"], int),
      openingType: json |> at(["results", "openingType"], string),
      welcomeMessage:
        json |> optional(at(["results", "welcomeMessage"], string)),
    };
};

module Api = {
  let fetch =
      ({channelid, token}: Types.credentials): Js.Promise.t(option(t)) =>
    Js.Promise.(
      Fetch.fetchWithInit(
        {j|https://api.recast.ai/connect/v1/webhook/$channelid/preferences|j},
        Fetch.RequestInit.make(
          ~headers=Fetch.HeadersInit.make({"Authorization": token}),
          (),
        ),
      )
      |> then_(Fetch.Response.json)
      |> then_(json =>
           json |> Decode.preferences |> (pref => Some(pref)) |> resolve
         )
      |> catch(_err => resolve(None))
    );
};
