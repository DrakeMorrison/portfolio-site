const changeBackground = (backgroundUrl) => {
  // get image tag
  const imgTag = document.getElementsByClassName('bg')[0];

  // set image source
  imgTag.src = backgroundUrl;
}

export default changeBackground;
