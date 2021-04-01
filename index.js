const regex1 = /aaa/
console.log('regex1', regex1, typeof regex1);

const values = ['a','a','a'];
const regex2 = new RegExp(values.join(''));
console.log('regex2', regex2, typeof regex2);

console.log('matches aab?', regex1.test('aab'));
console.log('matches aaa', regex1.test('aaa'));

const regex3 = /aaa/
const exec1 = regex3.exec('aaa');
console.log('exec', exec1);
console.log('exec match', exec1[0]);

const regexWithGroup = /aa(bb|cc)/
const matchWithGroup = regexWithGroup.exec('aabb');
console.log('exec with group', matchWithGroup);

const regexWithNonCaptureGroup = /aa(?:bb|cc)/
console.log('exec non-capture', regexWithNonCaptureGroup.exec('aabb'));

const regexWithNamedGroup = /aa(?<myGroup>bb|cc)/
const matchWithNamedGroup = regexWithNamedGroup.exec('aabb');
console.log('exec non-capture', matchWithNamedGroup);
if (matchWithNamedGroup.groups) {
    console.log('vi har groups');
    if (matchWithNamedGroup.groups.myGroup) {
        console.log('vi har myGroup med värde: ' + matchWithNamedGroup.groups.myGroup);
    }
}

console.log('--------------------------');

const regexMultiMatch = /(?:aa|bb|cc)/g;
const multiMatchString = 'aa bb cc';
console.log('multiple matches', regexMultiMatch.exec(multiMatchString));

console.log('string.match', multiMatchString.match(regexMultiMatch));
console.log('string.matchAll', multiMatchString.matchAll(regexMultiMatch));

for (const match of multiMatchString.matchAll(regexMultiMatch)) {
    console.log('matchAll match:', match);
}

console.log('--------------------------');

const regexMultiMatchLoop = /(?:aa|bb|cc)/g;
let multiExecMatch;
console.log('regexMultiMatchLoop.index', regexMultiMatchLoop.lastIndex);
while ( (multiExecMatch = regexMultiMatchLoop.exec(multiMatchString)) !== null ) {
    console.log('multiExecMatch match', multiExecMatch);
    console.log('regexMultiMatchLoop.index', regexMultiMatchLoop.lastIndex);
}

console.log('--------------------------');

console.log('index of /bb/', 'aa bb cc'.search(/bb/));

console.log('--------------------------');

const replaceStr = 'aa bb cc bb';
console.log('replace with string', replaceStr.replace('bb', 'BB'));
console.log('replace with regex', replaceStr.replace(/(?:bb|cc)/, 'QQ'));
console.log('replace with regex with global', replaceStr.replace(/(?:bb|cc)/g, 'QQ'));

console.log('replaceAll with string', replaceStr.replaceAll('bb', 'BB'));
// Ger fel
// console.log('replaceAll with regex', replaceStr.replaceAll(/(?:bb|cc)/, 'QQ'));
console.log('replaceAll with regex with global', replaceStr.replaceAll(/(?:bb|cc)/g, 'QQ'));

console.log('--------------------------');

const replaceRegex = /<span class="(?<className>[^"]*)">/;
const replaceString = '<div><span class="some-class"></div>';
console.log('replace with whole match:', replaceString.replace(replaceRegex, '$&'));
console.log('replace with group id:', replaceString.replace(replaceRegex, '$1'));
console.log('replace with group name:', replaceString.replace(replaceRegex, '$<className>'));

console.log('--------------------------');

console.log('replace with group name:', replaceString.replace(replaceRegex, (...params) => {
    console.log('replace callback', params);
    return "REPLACE-VALUE";
}));
