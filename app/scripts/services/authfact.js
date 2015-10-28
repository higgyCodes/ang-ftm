utahVotes.factory('authFactory', function(){
	var service = {};
	


	function auth(id, displayName, gender, pic, org) {
	    this.ident = id;
	    this.displayName = displayName;
	    this.gender = gender;
	    this.pic = pic;
	    this.org = org;
	}



	service.successful = function(data, object) {
		var p = data.facebook
		
		//Finds the organization in match id
		var orgfind = function(user) {
			for (i in object.organizations) {
			if (i == user.org) {
				var d = object.organizations[i]
				user.lgname = d['name'];
				user.smname = d['shortname'];
				}
			}
		};

		//Finds the mat in the database with the facebook auth.
		var matchid = function() {
			for (i in object.members) {
				var memberid = object.members[i].id;
console.log(data.facebook.id)
				if (memberid == data.facebook.id) {
					console.log('success')
					success = true;
					
					//Creates User Object
					var user = new auth(
					object.members[i].id, 
					object.members[i].name, 
					p.cachedUserProfile.gender,
					p.profileImageURL,
					object.members[i].org
					)
					orgfind(user);
					return user;
				}
			}
		}

		return matchid();
	};

return service
})

