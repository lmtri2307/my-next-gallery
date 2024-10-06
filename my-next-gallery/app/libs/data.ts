const fakePhotos = [
  {
    id: 1,
    url: "https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau-1024x640.jpg",
    comments: ["Great photo!", "Love this!"],
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EuNkDpNk-b8P8UhLV8mdf2UOVGDMj2IKdg&s",
    comments: [
      "Amazing shot!",
      "Nice capture!",
      "Nice capture!",
      "Nice capture!",
      "Nice capture!",
      "Nice capture!",
    ],
  },
  {
    id: 3,
    url: "https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau-1024x640.jpg",
    comments: ["Beautiful!", "So cool!", "So cool!", "So cool!"],
  },
  {
    id: 4,
    url: "https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/hinh-nen-Luffy-2K-chat-ngau-1024x640.jpg",
    comments: [],
  },
];

export const fetchPhotos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fakePhotos;
};
