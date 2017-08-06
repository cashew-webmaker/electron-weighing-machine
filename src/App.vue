<template>
    <div class="container">
        <h1>Weighing Machine App</h1>

        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Guide</h3>
            </div>
            <div class="panel-body">
                <h3>We Eat Food First</h3>
                <p>Then we click some buttons</p>
                <button class="btn btn-info" @click="showModal()">Show Modal</button>
                <button class="btn btn-success" @click="httpBasicTest()">Basic HTTP Test</button>
                <button class="btn btn-success" @click="httpWithTokenTest()">HTTP with Token Test</button>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Some Modal</h4>
                    </div>
                    <div class="modal-body">
                        This is a modal
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Mounted');
        },
        data() {
            return {
                wmgUrl: "http://38381e6d.ngrok.io",
                wmgClientSecret: "WXdh3tyTiAuYBQ0wCkKMCQI8jtl819PJcddg1p21",
                wmgKey: "revoked"
            };
        },
        methods: {

            httpBasicTest() {
                axios.get(this.wmgUrl + "/api/test").then((response) => {
                    console.log(response);
                });
            },
            httpWithTokenTest() {
                axios.request({
                    url: this.wmgUrl +"/api/testWithToken",
                    headers: {
                        "Authorization" : "Bearer " + this.wmgKey
                    }
                }).then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                });
            },
            showModal() {
                $("#myModal").modal();
            }
        }
    }
</script>