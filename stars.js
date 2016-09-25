const starPainter=function(a){
	if(a<=0){return "";}
	return ("*"+starPainter(a-1))
}
const spacePainter=function(a){
	if(a<=0){return "";}
	return (" "+spacePainter(a-1))
}
const stars=function(a,b){
	if(a<=0){return "";}
	return ((spacePainter(a)+starPainter(b)+"\n")+stars(a-1,b+2))
}
console.log(stars(5,1))