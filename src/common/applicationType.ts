export enum EdPermission {
  // region Dashboard

  // Dashboard Tỉ lệ nhân sự đáp ứng theo nhóm năng lực
  DASHBOARD_PERSONNEL_RATE_BY_CAPACITY_GROUP = 'dashboard:personnel_rate_by_capacity_group',
  // Dashboard Điểm trung bình theo phòng ban
  DASHBOARD_AVERAGE_SCORE_BY_DEPARTMENT = 'dashboard:average_score_by_department',
  // Dashboard Kỳ đánh giá gần nhất
  DASHBOARD_RECENT_EVALUATION = 'dashboard:recent_evaluation',
  // Dashboard Tỉ lệ nhân sự đáp ứng theo phòng ban
  DASHBOARD_PERSONNEL_RATE_BY_DEPARTMENT = 'dashboard:personnel_rate_by_department',
  // Dashboard Điểm trung bình theo nhóm năng lực
  DASHBOARD_AVERAGE_SCORE_BY_CAPACITY_GROUP = 'dashboard:average_score_by_capacity_group',
  // Cá nhân
  // Dashboard Biểu đồ năng lực cá nhân
  DASHBOARD_PERSONAL_CAPACITY_CHART = 'dashboard:personal_capacity_chart',
  // Dashboard Tỷ lệ đáp ứng yêu cầu cá nhân
  DASHBOARD_PERSONAL_RATE = 'dashboard:personal_rate',
  // Dashboard Bài đánh giá đang diễn ra
  DASHBOARD_ONGOING_EVALUATION = 'dashboard:ongoing_evaluation',
  // Dashboard Top năng lực đạt chuẩn
  DASHBOARD_TOP_CAPACITY_STANDARD = 'dashboard:top_capacity_standard',
  // Dashboard Top năng lực chưa đạt chuẩn
  DASHBOARD_TOP_CAPACITY_NOT_STANDARD = 'dashboard:top_capacity_not_standard',

  // Dashboard Tổng số nhân sự trong hệ thống
  DASHBOARD_TOTAL_PERSONNEL = 'dashboard:total_personnel',
  // Dashboard Kết quả đánh giá trung bình
  DASHBOARD_AVERAGE_EVALUATION_RESULT = 'dashboard:average_evaluation_result',
  // Dashboard Tổng số năng lực đạt chuẩn
  DASHBOARD_TOTAL_CAPACITY_STANDARD = 'dashboard:total_capacity_standard',
  // Dashboard Tổng số năng lực chưa đạt chuẩn
  DASHBOARD_TOTAL_CAPACITY_NOT_STANDARD = 'dashboard:total_capacity_not_standard',

  // endregion

  // region Thực thi
  EXECUTE_VIEW_EVALUATION_PERIOD = 'execute:view_evaluation_period',
  EXECUTE_CREATE_UPDATE_EVALUATION = 'execute:create_update_evaluation',
  EXECUTE_DELETE_EVALUATION = 'execute:delete_evaluation',
  EXECUTE_PUBLISH_EVALUATION = 'execute:publish_evaluation',
  EXECUTE_VIEW_EVALUATION_DETAILS = 'execute:view_evaluation_details',
  EXECUTE_ADD_EVALUATOR = 'execute:add_evaluator',
  EXECUTE_PERFORM_EVALUATION = 'execute:perform_evaluation',
  EXECUTE_VIEW_EVALUATION_NEED_APPROVAL = 'execute:view_evaluation_need_approval',
  EXECUTE_CREATE_TEST_APPROVAL = 'execute:create_test_approval',
  EXECUTE_ADD_EVALUATION_BOARD_APPROVAL = 'execute:add_evaluation_board_approval',
  EXECUTE_APPROVE_EVALUATION = 'execute:approve_evaluation',
  // endregion

  // region Kiểm tra
  TEST_VIEW_TEST_PERIOD = 'test:view_test_period',
  TEST_CREATE_TEST_EXAM = 'test:create_test_exam',
  TEST_DELETE_TEST_PERIOD = 'test:delete_test_period',
  TEST_VIEW_TEST_DETAILS = 'test:view_test_details',
  TEST_PERFORM_TEST = 'test:perform_test',
  // endregion

  // region Lập lịch đào tạo
  SCHEDULE_TRAINING_VIEW_PLAN = 'schedule_training:view_plan',
  SCHEDULE_TRAINING_CREATE_PLAN = 'schedule_training:create_plan',
  SCHEDULE_TRAINING_UPDATE_PLAN = 'schedule_training:update_plan',
  SCHEDULE_TRAINING_APPLY_PLAN = 'schedule_training:apply_plan',
  SCHEDULE_TRAINING_VIEW_SCHEDULE = 'schedule_training:view_schedule',
  // endregion

  // region ROI
  ROI_VIEW_RETURN_ON_INVESTMENT = 'roi:view_return_on_investment',
  ROI_CREATE_UPDATE_ROI_PROGRAM = 'roi:create_update_roi_program',

  // region SURVEY_PERIOD
  SURVEY_PERIOD_VIEW = 'survey_period:view',
  SURVEY_PERIOD_CREATE = 'survey_period:create',
  SURVEY_PERIOD_UPDATE = 'survey_period:update',
  SURVEY_PERIOD_DELETE = 'survey_period:delete',
  SURVEY_PERIOD_EXECUTE = 'survey_period:execute',
  // endregion

  // region Lộ trình học tập
  // Quản lý người phê duyệt
  LEARNING_PATH_APPROVE_MANAGER = 'learning_path:approve_manager',
  // Tạo IDP
  LEARNING_PATH_CREATE_IDP = 'learning_path:create_idp',
  // Xem IDP
  LEARNING_PATH_VIEW_IDP = 'learning_path:view_idp',
  // Phê duyệt IDP
  LEARNING_PATH_APPROVE_IDP = 'learning_path:approve_idp',
  // Mentor
  LEARNING_PATH_VIEW_MENTOR = 'learning_path:view_mentor',
  // endregion

  // region Báo cáo đánh giá
  REPORT_VIEW_EVALUATION_RESULT = 'report:view_evaluation_result',
  REPORT_CONFIGURE_EVALUATION_RANKING = 'report:configure_evaluation_ranking',
  REPORT_VIEW_EVALUATION_DETAIL = 'report:view_evaluation_detail',
  REPORT_EXPORT_EVALUATION_PDF = 'report:export_evaluation_pdf',
  REPORT_VIEW_MY_RESULT = 'report:view_my_result',
  REPORT_VIEW_COMPARISON_REPORT = 'report:view_comparison_report',
  REPORT_VIEW_TRAINING_REPORT = 'report:view_training_report',
  REPORT_VIEW_TALENT_REPORT = 'report:view_talent_report',
  REPORT_VIEW_PROJECT_REPORT = 'report:view_project_report',
  REPORT_CREATE_PROJECT_REPORT = 'report:create_project_report',
  REPORT_DELETE_PROJECT_REPORT = 'report:delete_project_report',
  REPORT_VIEW_CONSENSUS_RATE_REPORT = 'report:view_consensus_rate_report',
  REPORT_VIEW_DEVELOPMENT_PATH_REPORT = 'report:view_development_path_report',
  REPORT_VIEW_9_BOX_REPORT = 'report:view_9_box_report',
  // Xem báo cáo so sánh các đối tượng
  REPORT_VIEW_COMPARISON_OBJECT_REPORT = 'report:view_comparison_object_report',
  REPORT_VIEW_COMPARISON_OBJECT_REPORT_DEPARTMENT = 'report:view_comparison_object_report:department',
  // endregion

  // region Báo cáo kiểm tra
  REPORT_TEST_VIEW_TEST_RESULT = 'report_test:view_test_result',
  REPORT_TEST_STATISTICS_CANDIDATE = 'report_test:statistics_candidate',
  REPORT_TEST_TRAINING = 'report_test:training',
  // endregion

  // region Sơ đồ tổ chức
  ORGANIZATION_CHART_VIEW = 'organization_chart:view',
  ORGANIZATION_CHART_ADD_DEPARTMENT = 'organization_chart:add_department',
  ORGANIZATION_CHART_EDIT_DEPARTMENT = 'organization_chart:edit_department',
  ORGANIZATION_CHART_DELETE_DEPARTMENT = 'organization_chart:delete_department',
  ORGANIZATION_CHART_IMPORT_EXCEL = 'organization_chart:import_excel',
  // endregion

  // region Quản lý phòng ban
  DEPARTMENT_MANAGEMENT_VIEW = 'department_management:view',
  DEPARTMENT_MANAGEMENT_CREATE = 'department_management:create',
  DEPARTMENT_MANAGEMENT_EDIT = 'department_management:edit',
  DEPARTMENT_MANAGEMENT_DELETE = 'department_management:delete',
  // endregion

  // region Quản lý chức danh
  POSITION_MANAGEMENT_VIEW = 'position_management:view',
  POSITION_MANAGEMENT_CREATE = 'position_management:create',
  POSITION_MANAGEMENT_EDIT = 'position_management:edit',
  POSITION_MANAGEMENT_DELETE = 'position_management:delete',
  POSITION_MANAGEMENT_IMPORT_EXCEL = 'position_management:import_excel',
  // endregion

  // region Quản lý vị trí
  POSITION_MANAGEMENT_VIEW_POSITION = 'position_management:view_position',
  POSITION_MANAGEMENT_CREATE_POSITION = 'position_management:create_position',
  POSITION_MANAGEMENT_UPDATE_POSITION = 'position_management:update_position',
  POSITION_MANAGEMENT_DELETE_POSITION = 'position_management:delete_position',
  POSITION_MANAGEMENT_IMPORT_EXCEL_POSITION = 'position_management:import_excel_position',
  // endregion

  // region Quản lý nhân sự
  HR_MANAGEMENT_VIEW = 'hr_management:view',
  HR_MANAGEMENT_CREATE = 'hr_management:create',
  HR_MANAGEMENT_UPDATE = 'hr_management:update',
  HR_MANAGEMENT_DELETE = 'hr_management:delete',
  HR_MANAGEMENT_IMPORT_EXCEL = 'hr_management:import_excel',
  // Cập nhật mật khẩu
  HR_MANAGEMENT_UPDATE_PASSWORD = 'hr_management:update_password',
  // endregion

  // region Năng lực
  CAPACITY_VIEW = 'capacity:view',
  CAPACITY_ADD = 'capacity:add',
  CAPACITY_EDIT = 'capacity:edit',
  CAPACITY_DELETE = 'capacity:delete',
  CAPACITY_IMPORT_EXCEL = 'capacity:import_excel',
  CAPACITY_ADD_GROUP = 'capacity:add_group',
  CAPACITY_DELETE_GROUP = 'capacity:delete_group',
  CAPACITY_EDIT_GROUP = 'capacity:edit_group',
  // endregion

  // region khung ăng lực
  CAPACITY_FRAME_VIEW = 'capacity_frame:view',
  CAPACITY_FRAME_CREATE = 'capacity_frame:create',
  CAPACITY_FRAME_UPDATE = 'capacity_frame:update',
  CAPACITY_FRAME_DELETE = 'capacity_frame:delete',
  CAPACITY_FRAME_IMPORT_EXCEL = 'capacity_frame:import_excel',
  // endregion

  // region Thang điểm
  SCALE_VIEW = 'scale:view',
  SCALE_CREATE = 'scale:create',
  SCALE_UPDATE = 'scale:update',
  SCALE_DELETE = 'scale:delete',
  // endregion

  // region Câu hỏi kiểm tra
  TEST_QUESTION_VIEW = 'test_question:view',
  TEST_QUESTION_ADD = 'test_question:add',
  TEST_QUESTION_UPDATE = 'test_question:update',
  TEST_QUESTION_DELETE = 'test_question:delete',
  TEST_QUESTION_FOLDER_ADD = 'test_question_folder:add',
  TEST_QUESTION_FOLDER_UPDATE = 'test_question_folder:update',
  TEST_QUESTION_FOLDER_DELETE = 'test_question_folder:delete',
  // endregion

  // region Ánh xạ câu hỏi
  QUESTION_MAPPING = 'question_mapping',
  // endregion

  // region Thiết lập KPI
  KPI_VIEW = 'kpi:view',
  KPI_CREATE = 'kpi:create',
  KPI_UPDATE = 'kpi:update',
  KPI_DELETE = 'kpi:delete',
  // endregion

  // region Ánh xạ câu hỏi
  COURSE_LIST_VIEW = 'course_list:view',
  COURSE_LIST_ADD = 'course_list:add',
  COURSE_LIST_UPDATE = 'course_list:update',
  COURSE_LIST_DELETE = 'course_list:delete',
  COURSE_LIST_FOLDER_ADD = 'course_list_folder:add',
  COURSE_LIST_FOLDER_UPDATE = 'course_list_folder:update',
  COURSE_LIST_FOLDER_DELETE = 'course_list_folder:delete',
  // endregion

  // region Cấu hình ma trận khoá học
  COURSE_MATRIX_CONFIGURE = 'course_matrix:configure',
  // endregion

  // region Cấu hình
  // Cài đặt chung
  CONFIGURATION_GENERAL = 'configuration:general',
  // Cấu hình email
  CONFIGURATION_EMAIL = 'configuration:email',
  ACTION_LOG_SYSTEM_VIEW = 'action_log:view',
  // endregion

  // region Vai trò hệ thống
  SYSTEM_ROLE_VIEW = 'system_role:view',

  SYSTEM_ROLE_CREATE = 'system_role:create',
  SYSTEM_ROLE_UPDATE = 'system_role:update',
  SYSTEM_ROLE_DELETE = 'system_role:delete',
  // endregion
  // region Hồ sơ cá nhân
  PERSONAL_PROFILE_VIEW = 'personal_profile:view',
  // endregion

  // region LMS
  // region dashboard lms
  LMS_ADMIN_DASHBOARD_VIEW = 'lms:admin:dashboard:view',
  // endregion
  // region Quản lý đào tạo lms
  //  - Khoá học đăng ký
  LMS_ADMIN_TRAINING_COURSE_VIEW = 'lms:admin:training_course:view',
  LMS_ADMIN_TRAINING_COURSE_APPROVE = 'lms:admin:training_course:approve',

  // Chứng chỉ
  LMS_ADMIN_CERTIFICATE_VIEW = 'lms:admin:certificate:view',
  LMS_ADMIN_CERTIFICATE_CREATE = 'lms:admin:certificate:create',
  LMS_ADMIN_CERTIFICATE_UPDATE = 'lms:admin:certificate:update',

  // Chủ đề khoá học
  LMS_ADMIN_COURSE_TOPIC_VIEW = 'lms:admin:course_topic:view',
  LMS_ADMIN_COURSE_TOPIC_CREATE = 'lms:admin:course_topic:create',
  LMS_ADMIN_COURSE_TOPIC_DELETE = 'lms:admin:course_topic:delete',
  // Chủ đề lộ trình
  LMS_ADMIN_PATH_TOPIC_VIEW = 'lms:admin:path_topic:view',
  LMS_ADMIN_PATH_TOPIC_CREATE = 'lms:admin:path_topic:create',
  LMS_ADMIN_PATH_TOPIC_DELETE = 'lms:admin:path_topic:delete',
  // Chủ đề kiểm tra
  LMS_ADMIN_TEST_TOPIC_VIEW = 'lms:admin:test_topic:view',
  LMS_ADMIN_TEST_TOPIC_CREATE = 'lms:admin:test_topic:create',
  LMS_ADMIN_TEST_TOPIC_DELETE = 'lms:admin:test_topic:delete',
  // kỳ khảo sát
  LMS_ADMIN_SURVEY_PERIOD_VIEW = 'lms:admin:survey_period:view',
  LMS_ADMIN_SURVEY_PERIOD_CREATE = 'lms:admin:survey_period:create',
  LMS_ADMIN_SURVEY_PERIOD_UPDATE = 'lms:admin:survey_period:update',
  LMS_ADMIN_SURVEY_PERIOD_DELETE = 'lms:admin:survey_period:delete',

  // Tổ chức đào tạo
  // Tổ chức đào tạo Khoá học
  LMS_ADMIN_TRAINING_ORGANIZATION_VIEW = 'lms:admin:training_organization:view',
  LMS_ADMIN_TRAINING_ORGANIZATION_CREATE = 'lms:admin:training_organization:create',
  LMS_ADMIN_TRAINING_ORGANIZATION_UPDATE = 'lms:admin:training_organization:update',
  LMS_ADMIN_TRAINING_ORGANIZATION_DELETE = 'lms:admin:training_organization:delete',

  // Tổ chức đào tạo Lộ trình
  LMS_ADMIN_PATH_ORGANIZATION_VIEW = 'lms:admin:path_organization:view',
  LMS_ADMIN_PATH_ORGANIZATION_CREATE = 'lms:admin:path_organization:create',
  LMS_ADMIN_PATH_ORGANIZATION_UPDATE = 'lms:admin:path_organization:update',
  LMS_ADMIN_PATH_ORGANIZATION_DELETE = 'lms:admin:path_organization:delete',
  // Tổ chức đào tạo Kiểm tra

  LMS_ADMIN_TEST_ORGANIZATION_VIEW = 'lms:admin:test_organization:view',
  LMS_ADMIN_TEST_ORGANIZATION_CREATE = 'lms:admin:test_organization:create',
  LMS_ADMIN_TEST_ORGANIZATION_UPDATE = 'lms:admin:test_organization:update',
  LMS_ADMIN_TEST_ORGANIZATION_DELETE = 'lms:admin:test_organization:delete',

  // Thư viện khoá học
  LMS_ADMIN_COURSE_LIBRARY_VIEW = 'lms:admin:course_library:view',
  // Thư viện nội dung - crud
  LMS_ADMIN_CONTENT_LIBRARY_VIEW = 'lms:admin:content_library:view',
  LMS_ADMIN_CONTENT_LIBRARY_CREATE = 'lms:admin:content_library:create',
  LMS_ADMIN_CONTENT_LIBRARY_UPDATE = 'lms:admin:content_library:update',
  LMS_ADMIN_CONTENT_LIBRARY_DELETE = 'lms:admin:content_library:delete',
  // Thư viện câu hỏi
  LMS_ADMIN_QUESTION_LIBRARY_VIEW = 'lms:admin:question_library:view',
  LMS_ADMIN_QUESTION_LIBRARY_CREATE = 'lms:admin:question_library:create',
  LMS_ADMIN_QUESTION_LIBRARY_UPDATE = 'lms:admin:question_library:update',
  LMS_ADMIN_QUESTION_LIBRARY_DELETE = 'lms:admin:question_library:delete',
  // Thử viên đề thì
  LMS_ADMIN_TEST_LIBRARY_VIEW = 'lms:admin:test_library:view',
  LMS_ADMIN_TEST_LIBRARY_CREATE = 'lms:admin:test_library:create',
  LMS_ADMIN_TEST_LIBRARY_UPDATE = 'lms:admin:test_library:update',
  LMS_ADMIN_TEST_LIBRARY_DELETE = 'lms:admin:test_library:delete',
  // Thư viện câu hỏi khảo sát

  LMS_ADMIN_SURVEY_QUESTION_LIBRARY_VIEW = 'lms:admin:survey_question_library:view',
  LMS_ADMIN_SURVEY_QUESTION_LIBRARY_CREATE = 'lms:admin:survey_question_library:create',
  LMS_ADMIN_SURVEY_QUESTION_LIBRARY_UPDATE = 'lms:admin:survey_question_library:update',
  LMS_ADMIN_SURVEY_QUESTION_LIBRARY_DELETE = 'lms:admin:survey_question_library:delete',

  // Báo cáo nhân sự
  LMS_ADMIN_REPORT_PERSONNEL_VIEW = 'lms:admin:report_personnel:view',
  // Báo cáo Khoá học
  LMS_ADMIN_REPORT_COURSE_VIEW = 'lms:admin:report_course:view',
  // Báo cáo Lộ trình
  LMS_ADMIN_REPORT_PATH_VIEW = 'lms:admin:report_path:view',
  // Báo cáo thời lượng học tập
  LMS_ADMIN_REPORT_STUDY_DURATION_VIEW = 'lms:admin:report_study_duration:view',
  // Báo cáo khảo sát
  LMS_ADMIN_REPORT_SURVEY_VIEW = 'lms:admin:report_survey:view',
  // Cấu hình hệ thống - Tài khoản liên kết
  LMS_ADMIN_CONFIGURE_SYSTEM_VIEW = 'lms:admin:linked-accounts',

  // LMS lecturer
  // region dashboard lms
  LMS_LECTURER_DASHBOARD_VIEW = 'lms:lecturer:dashboard:view',
  // Tổ chức đào tạo
  // Tổ chức đào tạo Khoá học
  LMS_LECTURER_TRAINING_ORGANIZATION_VIEW = 'lms:lecturer:training_organization:view',
  LMS_LECTURER_TRAINING_ORGANIZATION_CREATE = 'lms:lecturer:training_organization:create',
  LMS_LECTURER_TRAINING_ORGANIZATION_UPDATE = 'lms:lecturer:training_organization:update',
  LMS_LECTURER_TRAINING_ORGANIZATION_DELETE = 'lms:lecturer:training_organization:delete',
  // Tổ chức đào tạo Kiểm tra

  LMS_LECTURER_TEST_ORGANIZATION_VIEW = 'lms:lecturer:test_organization:view',
  LMS_LECTURER_TEST_ORGANIZATION_CREATE = 'lms:lecturer:test_organization:create',
  LMS_LECTURER_TEST_ORGANIZATION_UPDATE = 'lms:lecturer:test_organization:update',
  LMS_LECTURER_TEST_ORGANIZATION_DELETE = 'lms:lecturer:test_organization:delete',

  // Lịch
  LMS_LECTURER_SCHEDULE_VIEW = 'lms:lecturer:schedule:view',

  // Báo cáo
  // Báo cáo học tập
  LMS_LECTURER_REPORT_STUDY_VIEW = 'lms:lecturer:report_study:view',

  // endregion

  // LMS user
  // region dashboard lms
  LMS_USER_DASHBOARD_VIEW = 'lms:user:dashboard:view',
  // Học tập
  //  - thực thi Khoá học
  LMS_USER_STUDY_COURSE = 'lms:user:study:course',
  //  - thực thi Lộ trình
  LMS_USER_STUDY_PATH = 'lms:user:study:path',
  //  - thực thi Kiểm tra
  LMS_USER_STUDY_TEST = 'lms:user:study:test',
  //  - thực thi Khảo sát
  LMS_USER_STUDY_SURVEY = 'lms:user:study:survey',
  // Lịch
  LMS_USER_SCHEDULE_VIEW = 'lms:user:schedule:view',

  // Báo cáo
  // Báo cáo học tập
  LMS_USER_REPORT_STUDY_VIEW = 'lms:user:report_study:view',

  // region dashboard cms
  CMS_DASHBOARD = 'cms_dashboard',
  CMS_DASHBOARD_VIEW = 'cms:dashboard:view',

  // region company
  CMS_COMPANY = 'cms_company',
  CMS_COMPANY_VIEW = 'cms:company:view',
  CMS_COMPANY_CREATE = 'cms:company:create',
  CMS_COMPANY_UPDATE = 'cms:company:update',
  CMS_COMPANY_DELETE = 'cms:company:detele',
  // endregion

  // region user
  CMS_USER = 'cms_user',
  CMS_USER_VIEW = 'cms:user:view',
  CMS_USER_CREATE = 'cms:user:create',
  CMS_USER_UPDATE = 'cms:user:update',
  CMS_USER_DELETE = 'cms:user:delete',

  // region thư viện năng lực
  CMS_CAPACITY_LIBRARY = 'cms_capacity_library',
  CMS_CAPACITY_LIBRARY_VIEW = 'cms:capacity_library:view',
  CMS_CAPACITY_LIBRARY_CREATE = 'cms:capacity_library:create',
  CMS_CAPACITY_LIBRARY_UPDATE = 'cms:capacity_library:update',
  CMS_CAPACITY_LIBRARY_DELETE = 'cms:capacity_library:delete',
  // import excel
  CMS_CAPACITY_LIBRARY_IMPORT_EXCEL = 'cms:capacity_library:import_excel',
  // tạo nhóm năng lực
  CMS_CAPACITY_LIBRARY_GROUP_CREATE = 'cms:capacity_library_group:create',
  CMS_CAPACITY_LIBRARY_GROUP_UPDATE = 'cms:capacity_library_group:update',
  CMS_CAPACITY_LIBRARY_GROUP_DELETE = 'cms:capacity_library_group:delete',
  // endregion

  // region thư viện khung năng lực
  CMS_CAPACITY_FRAME = 'cms_capacity_frame',
  CMS_CAPACITY_FRAME_VIEW = 'cms:capacity_frame:view',
  CMS_CAPACITY_FRAME_CREATE = 'cms:capacity_frame:create',
  CMS_CAPACITY_FRAME_UPDATE = 'cms:capacity_frame:update',
  CMS_CAPACITY_FRAME_DELETE = 'cms:capacity_frame:delete',
  // import excel
  CMS_CAPACITY_FRAME_IMPORT_EXCEL = 'cms:capacity_frame:import_excel',
  // endregion

  // region thư viện thang điểm
  CMS_SCALE = 'cms_scale',
  CMS_SCALE_VIEW = 'cms:scale:view',
  CMS_SCALE_CREATE = 'cms:scale:create',
  CMS_SCALE_UPDATE = 'cms:scale:update',
  CMS_SCALE_DELETE = 'cms:scale:delete',
  // endregion
  // region Cấu hình lĩnh vực hoạt động
  CMS_ACTIVITY_FIELD = 'cms_activity_field',
  CMS_ACTIVITY_FIELD_VIEW = 'cms:activity_field:view',
  CMS_ACTIVITY_FIELD_CREATE = 'cms:activity_field:create',
  CMS_ACTIVITY_FIELD_UPDATE = 'cms:activity_field:update',
  CMS_ACTIVITY_FIELD_DELETE = 'cms:activity_field:delete',
  // endregion

  // region Cấu hình vị trí
  CMS_POSITION = 'cms_position',
  CMS_POSITION_VIEW = 'cms:position:view',
  CMS_POSITION_CREATE = 'cms:position:create',
  CMS_POSITION_UPDATE = 'cms:position:update',
  CMS_POSITION_DELETE = 'cms:position:delete',
  // endregion
}
