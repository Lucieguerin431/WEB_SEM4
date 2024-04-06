<template>
    <div>
        <header>
            <div class="search">
                <input type="text" :value="searchKeyword" @input="updateSearch" placeholder="Search for vintage images">
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: ['searchKeyword'],
    methods: {
        updateSearch(event) {
            const value = event.target.value;
            this.$emit('update:searchKeyword', value);
            this.$emit('search', value);
        }
    }
}
</script>

<style scoped>
header {
    background-color: #fff6f1;
    text-align: center;
}

input[type=text] {
    width: 80%;
    height: 3rem;
    border: 2px solid #000000;
    background-color: #E3622E;
    box-shadow: 7px 7px #000000;
}

.search {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

@media (max-width: 768px) {
    input[type=text] {
        height: 2rem;
    }
}

</style>
