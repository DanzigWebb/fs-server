const blacklist = [
	
	'^npm-debug\\.log$', 
	'^\\..*\\.swp$', 

	'^\\.git$',
	'^\\.idea',
	'^\\.key',
	'^\\.localized',
	'^\\.gitignore$',
	
	'^\\.DS_Store$', 
	'^\\.AppleDouble$', 
	'^\\.LSOverride$', 
	'^Icon\\r$', 
	'^\\._.*', 
	'^\\.Spotlight-V100(?:$|\\/)', 
	'\\.Trashes', 
	'^__MACOSX$', 

	'~$', 

	'^Thumbs\\.db$', 
	'^ehthumbs\\.db$', 
	'^Desktop\\.ini$', 
	'@eaDir$' 
];

exports.regex = new RegExp(blacklist.join('|'));
exports.is = filename => exports.regex.test(filename);
exports.not = filename => !exports.is(filename);
