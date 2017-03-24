<template>
    <form>
        <div>
            <h2>新建打樣記錄</h2>
        </div>
        <div class="form-group control-group form-inline">
            <label for="PRD_NO">產品編號</label>
            <input type="text"
                   class="form-control"
                   id="PRD_NO"
                   placeholder="產品編號"
                   required>
            <label for="client">客戶/業務</label>
            <input type="text"
                   class="form-control"
                   id="client"
                   placeholder="客戶/業務"
                   required>
        </div>
        <div class="form-group control-group form-inline">
            <label for="photo">產品相片</label>
            <input type="file"
                   id="photo">
        </div>
        <div class="form-group control-group form-inline">
            <label for="qualityGrade">品質等級</label>
            <label class="radio-inline">
                <input type="radio"
                       name="qualityGrade"
                       id="qualityGradeA"
                       value="A"> A
            </label>
            <label class="radio-inline">
                <input type="radio"
                       name="qualityGrade"
                       id="qualityGradeB"
                       value="B"> B
            </label>
            <label class="radio-inline">
                <input type="radio"
                       name="qualityGrade"
                       id="qualityGradeC"
                       value="C"> C
            </label>
            <label class="radio-inline">
                <input type="radio"
                       name="qualityGrade"
                       id="qualityGradeD"
                       value="D"> D
            </label>
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox"
                       id="originalSample"> <strong>原樣</strong>
            </label>
        </div>
        <div class="form-group control-group form-inline">
            <label for="decoMethod">加工方式</label>
            <input type="text"
                   class="form-control"
                   id="decoMethod"
                   placeholder="加工方式"
                   required>
            <label for="requestedCount">需求數量</label>
            <input type="number"
                   min="1"
                   class="form-control"
                   id="requestedCount"
                   placeholder="需求數量"
                   required>
        </div>
        <div class="form-group control-group form-inline">
            <label for="requestReceived">打樣單</label>
            <input type="date"
                   class="form-control"
                   id="requestReceived">
            <label for="artworkReceived">字稿</label>
            <input type="date"
                   class="form-control"
                   id="artworkReceived">
            <label for="componentReceived">白瓶</label>
            <input type="date"
                   class="form-control"
                   id="componentReceived">
        </div>
        <div class="form-group control-group form-inline">
            <label for="outsourcingCompleted">委外</label>
            <input type="date"
                   class="form-control"
                   id="outsourcingCompleted">
            <label for="sprayDeptCompleted">噴漆</label>
            <input type="date"
                   class="form-control"
                   id="sprayDeptCompleted">
            <label for="printDeptCompleted">印刷</label>
            <input type="date"
                   class="form-control"
                   id="printDeptCompleted">
        </div>
        <div class="form-group control-group form-inline">
            <label for="daysRequired">預估需時</label>
            <input type="number"
                   class="form-control"
                   id="daysRequired"
                   placeholder="需求日數">
        </div>
        <div class="form-group control-group form-inline">
            <textarea class="form-control"
                      rows="8"
                      placeholder="備註"
                      style="width:100%"></textarea>
        </div>
        <button type="button"
                class="btn btn-primary">建立打樣記錄</button>
        <button type="reset"
                class="btn btn-danger">刷新</button>
    </form>
</template>

<script>
export default {
    name: 'craeteSchedule'
};
</script>

<style></style>
