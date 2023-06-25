CREATE DATABASE streamers_project;

CREATE TABLE streamers (
  sreamer_id UUID PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  platform VARCHAR(30) NOT NULL,
  upvotes INTEGER NOT NULL,
  downvotes INTEGER NOT NULL,
  UNIQUE(name)
);

INSERT INTO streamers (streamer_id, name, description, platform, upvotes, downvotes)
VALUES (uuid_generate_v4(), 'Moty Weiss', 'A really nice YouTube streamer that shows how to create new things from scratch', 'Twitch', 2, 0);