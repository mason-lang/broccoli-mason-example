const mason = require('broccoli-mason')

module.exports = mason('src', {
	includeAmdefine: true,
	mslPath: 'msl/dist'
})
