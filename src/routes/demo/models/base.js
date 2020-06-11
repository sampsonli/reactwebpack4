class Base {
    #name = 'lichun2';

    changeName(name = 'hello') {
        this.#name = name;
    }
}
export default Base;
