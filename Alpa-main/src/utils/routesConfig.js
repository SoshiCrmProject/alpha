export const coreToolsRoutes = [
    "/",
    "/project-invites",
    "/contacts",
    "/calendar",
    "/timecards",
    "/reports",
    "/settings/account-info",
    "/company/info",
    "/company/expense-allocation",
    "/company/service-accounts",
    "/company/sso",
    "/company/trades",
    "/company/uom-master-list",
    "/company/webhooks",
    "/company/wbs",
    "/project/dates",
    "/project/defaults",
    "/project/fieldset",
    "/project/custom-fieldset",
    "/project/roles",
    "/tool/bidding",
    "/tool/budget/view",
    "/tool/budget/forecasting",
    "/tool/budget/change-migration",
    "/tool/management/event-config",
    "/tool/management/fieldset",
    "/tool/management/custom-fields",
    "/tool/management/conf-views",
    "/tool/cco/contract-settings",
    "/tool/cco/co-settings",
    "/tool/cco/fieldset",
    "/tool/cco/custom-fields",
    "/tool/connection-manager",
    "/tool/correspondence/types",
    "/tool/correspondence/fieldset",
    "/tool/correspondence/custom-fields",
    "/tool/correspondence/statuses",
    "/tool/directory",
    "/tool/dailylog/types",
    "/tool/dailylog/fieldset",
    "/tool/dailylog/custom-fields",
    "/tool/project-docs/fieldset",
    "/tool/project-docs/custom-fields",
    "/tool/drawing/fieldset",
    "/tool/drawing/custom-fields",
    "/tool/meeting/templates",
    "/tool/meeting/pdf-config",
    "/tool/rfis/fieldset",
    "/tool/rfis/custom-fields",
    "/tool/specification/fieldset",
    "/tool/specification/custom-fields",
    "/tool/submittals/general",
    "/tool/submittals/fieldset",
    "/tool/submittals/custom-fields",
    "/tool/task",
    "/view-project",
    "/projects/executive-dashboard",
    "/projects/health-dashboard",
    "/projects/open-items",
    "/projects/financial/budget-variance",
    "/projects/financial/contract-variance",
    "/projects/financial/contract-summary",
    "/projects/financial/commitment-summary",
]

export const pmRoutes = [
    "/pm/quality-and-safety",
    "/pm/project-management",
    "/pm/schedule",
    "/pm/gantt",
    "/pm/inspection",
    "/pm/recycle",
]

export const myProjectsRoutes = [
    "/",
    "/view-project",
    "/projects/executive-dashboard",
    "/projects/health-dashboard",
    "/projects/open-items",
    "/projects/financial/budget-variance",
    "/projects/financial/contract-variance",
    "/projects/financial/contract-summary",
    "/projects/financial/commitment-summary",
]

export const fieldsetRoutes = [
    "/project/fieldset",
    "/project/custom-fieldset",
]

export const budgetRoutes = [
    "/tool/budget/view",
    "/tool/budget/forecasting",
    "/tool/budget/change-migration",
]

export const managementRoutes = [
    "/tool/management/event-config",
    "/tool/management/fieldset",
    "/tool/management/custom-fields",
    "/tool/management/conf-views",
]

export const ccoRoutes = [
    "/tool/cco/contract-settings",
    "/tool/cco/co-settings",
    "/tool/cco/fieldset",
    "/tool/cco/custom-fields",
]

export const correspondenceRoutes = [
    "/tool/correspondence/types",
    "/tool/correspondence/fieldset",
    "/tool/correspondence/custom-fields",
    "/tool/correspondence/statuses",
]

export const dailylogRoutes = [
    "/tool/dailylog/types",
    "/tool/dailylog/fieldset",
    "/tool/dailylog/custom-fields",
]

export const submittalsRoutes = [
    "/tool/submittals/general",
    "/tool/submittals/fieldset",
    "/tool/submittals/custom-fields",
]

export const isActivePath = (location, paths) => {
    return paths.map(path => location.pathname === path).includes(true);
}