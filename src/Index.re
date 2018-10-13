let preferences: Types.preferences = {
  accentColor: "#E05A47",
  complementaryColor: "#FFFFFF",
  botMessageColor: "#707070",
  botMessageBackgroundColor: "#F6F6F6",
  backgroundColor: "#FFFFFF",
  headerLogo: "https://cdn.recast.ai/webchat/webchat-logo.svg",
  headerTitle: "My awesome chatbot",
  botPicture: "https://cdn.recast.ai/webchat/bot.png",
  userPicture: "https://cdn.recast.ai/webchat/user.png",
  onboardingMessage: "Come speak to me!",
  expanderLogo: "https://cdn.recast.ai/webchat/webchat-logo.svg",
  expanderTitle: "Click on me!",
  conversationTimeToLive: 24,
  openingType: "never",
  welcomeMessage: "Hello world !",
};

ReactDOMRe.renderToElementWithId(<App preferences />, "recast-webchat-div");
