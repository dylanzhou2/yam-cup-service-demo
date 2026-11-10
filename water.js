// Cup interior in metres; user dimensions minus a conservative 2 mm wall inset.
export const CUP = {height: .1103, bottomZ: .002, bottomRadius: .0234, topRadius: .04245};
export function radiusAt(h) { return CUP.bottomRadius + (CUP.topRadius-CUP.bottomRadius)*h/CUP.height; }
export function volumeAt(h) { const a=CUP.bottomRadius,b=radiusAt(h);return Math.PI*h*(a*a+a*b+b*b)/3*1e6; }
export function waterShape(ml) {
 const volume=Math.max(0,Math.min(Number.isFinite(ml)?ml:0,volumeAt(CUP.height)));
 let lo=0,hi=CUP.height;
 for(let i=0;i<36;i++){const h=(lo+hi)/2;if(volumeAt(h)<volume)lo=h;else hi=h;}
 const height=volume===0?0:(lo+hi)/2;
 return {height,bottomRadius:CUP.bottomRadius,topRadius:radiusAt(height),centerZ:CUP.bottomZ+height/2,volume};
}
