<template>
    <div>
        <h1>Welcome to Our Party</h1>
        <b-card>
            <b-form @submit="onSubmit">
                <b-form-group label="Your Name:">
                    <b-form-input v-model="form.name" required placeholder="Enter name" ></b-form-input>
                </b-form-group>

                <b-form-group label="Your Address:">
                    <b-form-input v-model="form.address" required placeholder="Enter address" ></b-form-input>
                </b-form-group>

                <b-form-group label="Impression Message:">
                    <b-form-textarea
                        v-model="form.message"
                        placeholder="Say something ..."
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                </b-form-group>

                <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            form: {
                name: '',
                address: '',
                message: ''
            }
        }),
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
        }
    }
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 30px 0
}

.card {
    width: 60%;
    margin: 0 auto
}
</style>