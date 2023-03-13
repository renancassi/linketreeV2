function copyText() {
    const textToCopy = "Renanzera#9977";
    navigator.clipboard.writeText(textToCopy).then(function() {
      console.log('Texto copiado para a área de transferência!');
    }, function(err) {
      console.error('Não foi possível copiar o texto: ', err);
    });
  }