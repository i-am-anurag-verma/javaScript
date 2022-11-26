const a = {
    name: 'dog',
    behavior: () => {
        const name = this.name
        return {
            sound: 'bark',
            when: function
                () {
                return name + this.sound + ' when strangers comes near him'
            }
        }
    }
}

console.log(a.behavior().when.call())