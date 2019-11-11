<template>
    <div class="con-upload">
        <div class="con-img-upload">
            <div v-for="(file, index) in files" :key="index" class="img-upload" @click.stop="open(file)">
                <button class="btn-x-file" type="button" @click.stop="remove(file)">
                    <i translate="no" class="material-icons notranslate">clear</i>
                </button>

                <h4 class="text-archive">
                    <span>{{ file.name }}</span>
                </h4>
            </div>

            <div class="con-input-upload">
                <input type="file" name="file" multiple @change="change" />
                <span class="text-input">Subir fichero</span>
                <i translate="no" class="material-icons notranslate">cloud_upload</i>
            </div>
        </div>
    </div>
</template>

<script src="./FileUpload.js"></script>
