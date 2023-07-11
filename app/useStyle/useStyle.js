
export const useItems_ocult =(items,StyleProperty,styleValue)=>{

    if(items.length>0){

        const items_Array = Array.from(items); 
        for(let i in items_Array){
            items_Array[i].style[StyleProperty] = styleValue;
           
        }
    }else{
        items.style[StyleProperty] = styleValue
    }

}

export const useItems_label = (input,label,bol=false)=>{
    const items_Array = Array.from(input); 
    const labels=Array.from(label)
    for(let i in items_Array){
        
       const id= items_Array[i].getAttribute('id');
      bol ? labels[i].setAttribute('for',id)
        : labels[i].setAttribute('for',Math.random()*1000000)
    }
    
}
