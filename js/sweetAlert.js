(async () => {
    const {value: nombre} = await Swal.fire({
        title: 'Bienvenido!',
        text: 'Queremos conocerte',
        icon: 'success',
        confirmButtonText: 'ok',
        background: '#000',
        backdrop: 'true',
        timer: '6000',
        timerProgressBar: 'true',
        position: 'center',
        allowOutsideClick: 'true',
        allowEscapeKey: 'false',
        allowEnterKey: 'false',
        stopKeydownPropagation: 'false',
    
        input: 'text',
        inputPlaceholder: 'Nombre',
        inputValue: ''
    });

if (nombre){
    Swal.fire({
        title: `Gracias ${nombre} por elegirnos!`
    });
}
})()