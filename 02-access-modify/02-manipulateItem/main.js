const styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');
console.log(styles);

styles[1] = 'Classic';
console.log(styles);

delete styles[0];

console.log(styles);
console.log(styles.length);
