
const calculatetemp =()=>{
    const numberTemp= document.getElementById('temp').value;
    // console.log(numberTemp);
    const tempselected =document.getElementById('temp_diff');
    const valuetemp= temp_diff.options[tempselected.selectedIndex].value;
    const result =document.getElementById("result");
    if(valuetemp==='cel')
    {
         let value=((numberTemp*9)/5) +32;

        result.innerHTML=`${Math.round(value)} degree in Farenhite .`;
    }
    else
    {
        let value=((numberTemp-32)*5)/9;

        result.innerHTML=`${Math.round(value)} degree in Centigrade .`
    }
}
