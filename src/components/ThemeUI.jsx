const ThemeUI = ({content,func_theme}) =>{
    const changeThemeChild = () =>{
      if(content.title == 'light'){
        func_theme('dark');
      }
      else{
         func_theme('light');
      }
        
    }
    return (
        <>
            <span onClick={()=>changeThemeChild()} className="fs-4 text-color_title"><i className={content.content}></i></span>
        </>
    )
}
export default ThemeUI;