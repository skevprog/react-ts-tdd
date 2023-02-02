import React from 'react'

export const FALLBACK_AVATAR_ALT_TEXT = '@hello-cat';
export const FALLBACK_AVATAR_URL = 'https://cataas.com/cat/says/hello%20world!';

type AvatarProps = {
  url?: string;
  alt?: string;
}

function Avatar({ url = FALLBACK_AVATAR_URL, alt = FALLBACK_AVATAR_ALT_TEXT }: AvatarProps) {
  return (
    <img src={url} alt={alt} />
  )
}

export default Avatar;
