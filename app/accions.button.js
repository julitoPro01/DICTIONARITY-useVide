import { useItems_label, useItems_ocult } from "./useStyle/useStyle";

/**
 * 
 * @param {string} dataName 
 * @param {Array<HTMLElement>} items 
 * @param {HTMLElement} of_all_buttons 
 * @returns {boolean}
*/
const select_all = document.querySelector('#containd_head');

export const select_style_block =(dataName,items,of_all_buttons)=>{
    
        useItems_ocult(items('input'),'display','block')
        useItems_ocult(of_all_buttons,'display','block')

        useItems_ocult(select_all,'display','block')
        useItems_label(items('input'),items('label'),true)
        
        of_all_buttons.firstElementChild.textContent = dataName;
        return {ok:true}
    }
    
    export const select_style_none =(items,of_all_buttons)=>{
        
        useItems_ocult(of_all_buttons,'display','none')
        useItems_ocult(items('input'),'display','none')
        useItems_label(items('input'),items('label'))
        
        select_all.querySelector('input').checked=false;
        for(let i=0;i<items('label').length;i++) items('input')[i].checked=false;
            
        useItems_ocult(select_all,'display','none')
        
    return {ok:true}
    
}