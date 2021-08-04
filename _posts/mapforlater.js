 function labMemberMarkers(){
  var memberMarkers = [];
  console.log("members")
  	for (var i = 0; i < labMembers.length; i++) {
     	marker = new L.marker([labMembers[i][1], labMembers[i][2]], {
      	icon: redIcon
     	}).bindPopup(labMembers[i][0])
     	memberMarkers.push(marker);
     	
 	 }
 	 var group=L.featureGroup(memberMarkers).addTo(map)
 	 map.fitBounds(group.getBounds())
	}
function alumniMarkers(){
var memberMarkers = [];
console.log("x")
  	for (var i = 0; i < alumni.length; i++) {
   	 marker = new L.marker([alumni[i][1], alumni[i][2]], {
      	icon: goldIcon
    	})
      	.bindPopup(alumni[i][0])
      	console.log(marker)
      	memberMarkers.push(marker);
     	map.addLayer(marker);
     	console.log(map)
     }
    } 