let syncError = () => {
    throw new Error('Sync Error');
};
try {
    syncError()
} catch (error) {
    console.log('error', error);
}
console.log('继续执行');