SELECT
    a.SAL AS SAL_NO
    ,b.full_name AS SALM_NAME
    ,a.CUS_NO
    ,a.SNM AS CUST_SNM
    ,a.NAME AS CUST_NAME
FROM DB_U105.dbo.CUST a
    LEFT JOIN overdueMonitor.dbo.activeSalesStaffDetail b ON a.SAL=b.erpID
WHERE b.erpID IS NOT NULL;
