const getMedics = (personelList) => {
	let medics = [];
	for ([key, value] of personelList){
		if(value === "MEDIC"){
			medics.push(key);
		};
	};
	return medics;
};

const userRoles = new Map();
userRoles.set("Capitu", "MEDIC");
userRoles.set("Policarpo", "PATIENT");
userRoles.set("Lima", "ARCHIVER");
userRoles.set("Augusto", "PATIENT");
userRoles.set("Amélia", "MEDIC")

console.log(getMedics(userRoles));