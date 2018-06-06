import { allProducts } from "./allProducts";

class presObj   {
id:number;
name:string;
img?:string;
category:boolean;
parent:number;
childs?:number[];
search?:string;



}


const marcas = 
[ 'Avril',
  'Clemence Vivien',
  'My Boo Company',
  'Karethic',
  'Pachamamai',
  'Dr Hauschka',
  'Les Sens de Marrakesh',
  'Secrets de Provence',
  'Alga Maris',
  'Acorelle',
   ]

const submarcas = ['Dr Hauschka',
'Avril','Les Sens de Marrakesh']

var items = allProducts.map(x=> x.companyName);
var uniqueItems = Array.from(new Set(items))
var uniqueItems = [...new Set(items)]
console.log(uniqueItems);

var items2 = allProducts.filter(x=>x.companyName==uniqueItems[0]).map(x=> x.metadata[0]).filter((x, i, a) => a.indexOf(x) == i)
let i = 1;
const cate:presObj[] = marcas.map(x=>
{
    let newCa:presObj= {
        category:true,
        name:x,
        parent:0,
        id:i
    }
 
    i = i+1;
    if(submarcas.indexOf(x)==-1)
    newCa.search= x.substr(0,4);
   
    return newCa
})

cate.map(x=> 
    {
    if(submarcas.indexOf(x.name)!=-1)
    {
      var meta2 = allProducts
      .filter(y=>y.companyName==x.name)
      .map(z=> z.metadata[1]).filter((b, ii, a) => a.indexOf(b) == ii)
      x.childs=[]
      meta2.forEach(meta=>
            {
                x.childs.push(i)
                let newCa:presObj= {
                    id:i,
                    parent:x.id,
                    category:true,
                    name:meta,
                    
                   
                }
                    i = i+1;
                    cate.push(newCa)


            })

    }
    }
)

console.log(cate);

