# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Plane.create({	name: 'Plane1', rows: 2, columns: 3	})
Plane.create({	name: 'Plane2', rows: 2, columns: 3	})


Flight.create({ 
	flight_number: 'SM1', 
	origin: 'SYD', 
	destination: 'MEL', 
	date: DateTime.new(2014,12,1,7),
	plane_id: 1
	})

Flight.create({ 
	flight_number: 'SM2', 
	origin: 'SYD', 
	destination: 'MEL', 
	date: DateTime.new(2014,12,2,7),
	plane_id: 1
	})

Flight.create({ 
	flight_number: 'SM3', 
	origin: 'SYD', 
	destination: 'MEL', 
	date: DateTime.new(2014,12,3,7),
	plane_id: 2
	})

Flight.create({ 
	flight_number: 'SM4', 
	origin: 'SYD', 
	destination: 'MEL', 
	date: DateTime.new(2014,12,4,7),
	plane_id: 2
	})

Flight.create({ 
	flight_number: 'SM5', 
	origin: 'SYD', 
	destination: 'MEL', 
	date: DateTime.new(2014,12,5,7),
	plane_id: 2
	})

Flight.create({ 
flight_number: 'QF11', 
origin: 'SYD', 
destination: 'BRIS', 
date: DateTime.new(2014,10,1,13),
plane_id: 2
})

Flight.create({ 
flight_number: 'EMI11', 
origin: 'PER', 
destination: 'BEI', 
date: DateTime.new(2014,9,2,18),
plane_id: 1
})

Flight.create({ 
flight_number: 'VIR1', 
origin: 'MEL', 
destination: 'HNG', 
date: DateTime.new(2015,10,2,20),
plane_id: 1
})

Flight.create({ 
flight_number: 'QF13', 
origin: 'SYD', 
destination: 'ADE', 
date: DateTime.new(2015,9,3,21),
plane_id: 2
})

User.create({ name: 'phil', email: 'phil@phil', password: 'phil'
	})
User.create({ name: 'fabian', email: 'fabian@fabian', password: 'fabian'
	})
User.create({ name: 'larry', email: 'larry@larry', password: 'larry'
	})
User.create({ name: 'jacquie', email: 'jacquie@jacquie', password: 'jacquie'
	})
User.create({ name: 'tarun', email: 'tarun@tarun', password: 'tarun'
	})