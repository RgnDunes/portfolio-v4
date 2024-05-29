import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "e1efnw2p",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skbWqSX4OYCXJQsQ2AdT78ylZaqwEdZOx91oVSjwsWxAAf3oaYJ9eKnHbTgXHNfG36RApQzN3BZYfqwG5tZuS8pxYti8fIeMDCTmJt6kbLOy093b0QhNxus2WHzUzQQ2yidczk6stFEyPA6e9getrfk5QKtEqHzTVaNmB6d0omi9fvbNojyn",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
