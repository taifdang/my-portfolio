const ToastUI = () =>{
    return (
        <>      
         <div class=" toast_css" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="">
               Đã lưu vào clipboard
            </div>
            <button type="button" class="btn-close text-white me-2 m-auto " data-bs-dismiss="toast" aria-label="Close"></button>
          
          </div>
        </div>
        </>
    )
}
export default ToastUI;