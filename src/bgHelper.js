const changeBackground = (backgroundUrl) => {
  const imgTag = document.getElementsByClassName('bg')[0];

  console.error('background set');

  imgTag.src = backgroundUrl;
}

export default changeBackground;
