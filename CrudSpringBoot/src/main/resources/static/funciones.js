function eliminar(id){
    swal({
        title: "Deseas eliminar?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((ok) => {
        if (ok) {

            $.ajax({

                url:"/eliminar/"+id,
                succes: function(res){
                    console.log(res);
                }
            }).then((ok)=>{
                if(ok){
                    location.href="/listar";
                }
            });

          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}