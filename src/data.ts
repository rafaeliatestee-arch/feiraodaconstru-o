export type Product={id:string;name:string;category:string;price:number;unit:string;image:string;badge?:string;featured?:boolean;description:string;stock:number};
export type Category={id:string;label:string;image:string};
export const categories:Category[]=[
{id:"cimento",label:"Cimento e argamassas",image:"https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=700&q=85"},
{id:"ferramentas",label:"Ferramentas",image:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=700&q=85"},
{id:"tintas",label:"Tintas e pintura",image:"https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=85"},
{id:"eletrica",label:"Elétrica e iluminação",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&q=85"},
{id:"hidraulica",label:"Hidráulica",image:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=700&q=85"},
{id:"acabamento",label:"Pisos e acabamentos",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85"}];
export const products:Product[]=[
{id:"cimento-cp",name:"Cimento Portland CP II — saco 50 kg",category:"cimento",price:39.9,unit:"saco",image:"https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=850&q=85",badge:"Mais procurado",featured:true,description:"Cimento para aplicações gerais em obras e reformas. Produto demonstrativo.",stock:40},
{id:"furadeira",name:"Furadeira de impacto profissional",category:"ferramentas",price:289.9,unit:"unidade",image:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=850&q=85",badge:"Destaque",featured:true,description:"Ferramenta elétrica para serviços de perfuração. Produto demonstrativo.",stock:12},
{id:"tinta",name:"Tinta acrílica para paredes — 18 L",category:"tintas",price:219.9,unit:"lata",image:"https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=850&q=85",featured:true,description:"Tinta acrílica para ambientes internos. Produto demonstrativo.",stock:24},
{id:"luminaria",name:"Luminária de teto moderna",category:"eletrica",price:129.9,unit:"unidade",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=850&q=85",featured:true,description:"Iluminação decorativa para ambientes residenciais. Produto demonstrativo.",stock:16},
{id:"torneira",name:"Torneira metálica para bancada",category:"hidraulica",price:159.9,unit:"unidade",image:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=850&q=85",description:"Metais sanitários para reforma e construção. Produto demonstrativo.",stock:18},
{id:"porcelanato",name:"Revestimento porcelanato premium",category:"acabamento",price:89.9,unit:"m²",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=850&q=85",badge:"Seleção especial",description:"Revestimento para projetos contemporâneos. Produto demonstrativo.",stock:100}
];
export const brl=(n:number)=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
export const WHATSAPP="5594992083041";
