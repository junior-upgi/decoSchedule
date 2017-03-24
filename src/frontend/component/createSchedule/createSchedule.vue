<template lang="html">
    <form>
        <div>
            <h2>新增打樣記錄</h2>
            <br>
        </div>
        <div class="form-group control-group form-inline">
            <label for="PRD_NO" class="text-danger">產品編號</label>
            <input type="text" class="form-control" id="PRD_NO" placeholder="產品編號" required>
        </div>
        <div class="form-group control-group form-inline">
            <label for="client" class="text-danger">客戶/業務</label>
            <input type="text" class="form-control" id="client" placeholder="客戶/業務" required>
        </div>
        <div class="form-group control-group form-inline">
            <label for="photo">產品相片</label>
            <input type="file" id="photo">
        </div>
        <div class="form-group control-group form-inline">
            <label for="qualityGrade">品質等級</label>
            <label
                v-for="qualityGrade in qualityGradeList"
                class="radio-inline">
                <input type="radio" name="qualityGrade" :id="'qualityGrade' + qualityGrade" :value="qualityGrade"> {{qualityGrade}}
            </label>
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox"id="originalSample">
                <strong>原樣</strong>
            </label>
        </div>
        <div class="form-group control-group form-inline">
            <label for="decoMethod" class="text-danger">加工方式</label>
            <input type="text" class="form-control" id="decoMethod" placeholder="加工方式" required>
        </div>
        <div class="form-group control-group form-inline">
            <label for="requestedCount" class="text-danger">需求數量</label>
            <input type="number" min="1" class="form-control" id="requestedCount" placeholder="需求數量" required>
        </div>
        <div class="form-group control-group form-inline">
            <label for="requestReceived" class="text-danger">打樣單</label>
            <input type="date" class="form-control" id="requestReceived" required>
        </div>
        <div class="form-group control-group form-inline">
            <label for="artworkReceived">字稿</label>
            <input type="date" class="form-control" id="artworkReceived">
        </div>
        <div class="form-group control-group form-inline">
            <label for="componentReceived">白瓶</label>
            <input type="date" class="form-control" id="componentReceived">
        </div>
        <div class="form-group control-group form-inline">
        </div>
        <div class="form-group control-group form-inline">
            <label for="daysRequired" class="text-danger">預估需時</label>
            <input type="number" class="form-control" id="daysRequired" placeholder="需求日數" required>
        </div>
        <div class="form-group control-group form-inline">
            <textarea class="form-control" rows="8" placeholder="備註" style="width:100%"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">新增記錄</button>
        <button type="reset" class="btn btn-danger">清除資料</button>
    </form>
</template>

<script>
export default {
    name: 'craeteSchedule',
    data: function() {
        return {
            qualityGradeList: ['A', 'B', 'C', 'D']
        };
    }
};
</script>

<style></style>
