const db = require("../config/db");

exports.countUsersByRole = async () => {
    const sql = `
        SELECT role, COUNT(*) as total
        FROM users
        GROUP BY role
    `;
    const [rows] = await db.query(sql);
    return rows;
};

exports.countJobs = async () => {
    const sql = `
        SELECT COUNT(*) as totalJobs FROM jobs
    `;
    const [rows] = await db.query(sql);
    return rows[0];
};

exports.countCompaniesWithJobs = async () => {
    const sql = `
        SELECT COUNT(DISTINCT company_id) as totalCompanies FROM jobs
    `;
    const [rows] = await db.query(sql);
    return rows[0];
};

exports.getAllJobsWithCompany = async () => {
    const sql = `
        SELECT
            j.id,
            j.title,
            d.name AS district_name,
            j.created_at,
            j.status,
            j.expire_date,
            j.status_post,
            u.name
        FROM jobs j
        JOIN users u
        ON j.company_id = u.id
        JOIN districts d
        ON j.district_id = d.id
        ORDER BY j.created_at DESC
    `;

    const [rows] = await db.query(sql);
    return rows;
};


//admin/user
exports.getAllUsers = async () => {
    const [rows] = await db.query(`
    SELECT * FROM users
    WHERE role = 'user'
    ORDER BY id DESC
    `);
    return rows;
};

exports.getAllCompanies = async () => {
  const [rows] = await db.query(`
  SELECT 
    u.id,
    u.name,
    u.email,
    u.created_at,

    cp.package_id,
    cp.expire_date,
    cp.job_limit,
    cp.job_used,
    cp.start_date,
    cp.expire_date,

    p.name AS package_name,
    p.job_limit,
    p.job_duration,

    c.company_name

  FROM users u

  LEFT JOIN company_packages cp 
  ON u.id = cp.company_id

  LEFT JOIN packages p 
  ON cp.package_id = p.id

  LEFT JOIN companies c
  ON u.id = c.user_id

  WHERE u.role = 'company'

  ORDER BY u.id DESC
  `);

  return rows;
};

exports.approveJob = async (jobId) => {
    const sql = `
        UPDATE jobs
        SET approved = 'approved'
        WHERE id = ?
    `;
    await db.query(sql,[jobId]);
};

exports.updateJobStatus = async (jobId, status) => {
    const sql = `
        UPDATE jobs
        SET status = ?
        WHERE id = ?
    `;
    const [result] = await db.query(sql,[status, jobId]);
    console.log(result);
};