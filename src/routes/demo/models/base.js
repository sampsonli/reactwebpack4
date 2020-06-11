class Base {
    #name = 'lichun';

    changeName(name = 'hello2') {
        this.#name = name;
    }
}
export default Base;
