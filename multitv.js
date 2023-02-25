// Load the YouTube Embedded Player API script
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a function that initializes the video players
function initMultiTV() {
  const videoIds = [
    "X_EWYemclKA",
    "SqHIO2zhxbA",
    "r2ZgRoX2orE",
    "UVPejgEw21c",
    "jjwiuUs3uWo",
    "Rc5qrxlJZzc",
    "8YPC2IV7ve0",
    "XEJM4Hcgd3M",
    "g4QA9Sh_g_8",
    "V5mBTSql74Q",
    "UF9KvTnZdic",
    "VIDEO_ID_12",
    // Add more video IDs for each player
  ];

  const playerIds = [
    "player-1",
    "player-2",
    "player-3",
    "player-4",
    "player-5",
    "player-6",
    "player-7",
    "player-8",
    "player-9",
    "player-10",
    "player-11",
    "player-12",
    // Add more player IDs for each player
  ];

  for (let i = 0; i < playerIds.length; i++) {
    new YT.Player(playerIds[i], {
      height: "250",
      width: "350",
      videoId: videoIds[i],
    });
  }
}
