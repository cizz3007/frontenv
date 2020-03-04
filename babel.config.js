module.exports = (api) => {
    api.cache(true)

    console.log('#### 바벨 트랜스 파일링 시작 ####')
    const presets = ['@babel/preset-env','@babel/preset-react'];
    const plugins = [''];
    return {
        presets,
    }
};
