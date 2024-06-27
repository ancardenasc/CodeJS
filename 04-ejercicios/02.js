function nombreResolucion(width, height){
  if(width >= 7680 && height >= 4332){
    return '8k';
  }
  else if(width >= 3840 && height >= 2160){
      return '4k';
    }
  else if(width >= 2560 && height >= 1440){
    return 'WQHD';
  }
  else if(width >= 1920 && height >= 1080){
    return 'FHD';
  }
  else if(width >= 1280 && height >= 720){
    return 'HD';
  }
  else
    return 'Dont have a resolution'
}

let nombre = nombreResolucion(1280, 768);

console.log(nombre);