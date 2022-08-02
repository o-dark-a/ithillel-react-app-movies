const allThings = "шматок дерева, Непотрібна обережність, Окуляри Елвіса,  непотрібні сумніви, Бавовна, Амулет від зглазу, Маховик часу,  КнигА,  Непотрібна парасолька, Ваза, непотрібний Ґудзик, жовта карточка,   непотрібне кімоно";
const regexp = /непотрібн/i;

const needfulThings = allThings.split(',').filter(thing => !regexp.test(thing)).map(rightThing => rightThing.trim());

console.log(needfulThings);
