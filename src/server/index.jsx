import { supabase } from "../config/supabaseClient";

export const _fetchData = async (topic) =>{
   try{
         var data = await supabase.from(topic).select("*").limit(10);
         return data;
   }catch{       
        alert(error);
   }
};
export const _downloadFile =  () =>{
      fetch('https://ecuzsftaupdixgwvjeoy.supabase.co/storage/v1/object/public/imagestore//DANGDUCTAI_RESUME.pdf')
      .then(response => response.blob()) // Get the response as a Blob
      .then(blob => {
      // Create a temporary URL for the Blob
      const url = URL.createObjectURL(blob);
      
      // Create a link and set its href to the temporary URL
      const link = document.createElement('a');
      link.href = url;
      
      // Set the link attributes for downloading
      link.setAttribute('download', 'DANGDUCTAI_RESUME.pdf');
      
      // Programmatically click the link to initiate the download
      link.click();
      
      // Clean up the temporary URL
      URL.revokeObjectURL(url);
      })
      .catch(error => console.error(error));
}

