const quotes = [
    {
      text: "FinOps is about cultural transformation, not just cost optimization.",
      author: "finops.org"
    },
    {
      text: "Cloud cost management is a team sport—collaboration is key.",
      author: "finops.org"
    },
    {
      text: "Visibility is the first step to cloud cost control.",
      author: "finops.org"
    },
    {
      text: "Tagging is the foundation of cloud cost allocation.",
      author: "AWS Best Practices"
    },
    {
      text: "Unused resources are the silent killers of cloud budgets.",
      author: "Azure Cost Management"
    },
    {
      text: "Right-sizing instances is the easiest way to reduce cloud costs.",
      author: "GCP Cost Optimization"
    },
    {
      text: "FinOps is not about cutting costs—it's about maximizing value.",
      author: "finops.org"
    },
    {
      text: "Automate cost alerts to avoid budget surprises.",
      author: "AWS Cost Explorer"
    },
    {
      text: "Reserved Instances can save up to 75% on cloud compute costs.",
      author: "Azure Pricing"
    },
    {
      text: "Commitment-based discounts are your friend in the cloud.",
      author: "GCP Committed Use Discounts"
    },
    {
      text: "FinOps requires a shift from CapEx to OpEx thinking.",
      author: "finops.org"
    },
    {
      text: "Use spot instances for fault-tolerant workloads to save big.",
      author: "AWS Spot Instances"
    },
    {
      text: "Monitor your storage lifecycle—delete what you don't need.",
      author: "Azure Blob Storage"
    },
    {
      text: "FinOps is a continuous process, not a one-time project.",
      author: "finops.org"
    },
    {
      text: "Leverage multi-cloud strategies to avoid vendor lock-in.",
      author: "Multi-Cloud Best Practices"
    },
    {
      text: "Use AWS Cost Explorer to identify spending trends.",
      author: "AWS Cost Management"
    },
    {
      text: "Azure Advisor provides actionable cost optimization recommendations.",
      author: "Azure Advisor"
    },
    {
      text: "GCP's Recommender API helps you optimize resources automatically.",
      author: "GCP Recommender"
    },
    {
      text: "FinOps bridges the gap between finance, engineering, and operations.",
      author: "finops.org"
    },
    {
      text: "Turn off development environments when not in use.",
      author: "Cloud Cost Optimization 101"
    },
    {
      text: "Use AWS Savings Plans for flexible long-term savings.",
      author: "AWS Savings Plans"
    },
    {
      text: "Azure Hybrid Benefit can reduce costs for Windows Server and SQL Server.",
      author: "Azure Hybrid Benefit"
    },
    {
      text: "GCP Sustained Use Discounts automatically apply to long-running workloads.",
      author: "GCP Pricing"
    },
    {
      text: "FinOps is about making cloud costs everyone's responsibility.",
      author: "finops.org"
    },
    {
      text: "Optimize data transfer costs by leveraging CDNs.",
      author: "Cloud Networking Best Practices"
    },
    {
      text: "Use AWS Trusted Advisor to identify cost-saving opportunities.",
      author: "AWS Trusted Advisor"
    },
    {
      text: "Azure Cost Management + Billing provides detailed cost breakdowns.",
      author: "Azure Cost Management"
    },
    {
      text: "GCP's Billing Reports help you track spending by project or service.",
      author: "GCP Billing"
    },
    {
      text: "FinOps is about aligning cloud spending with business goals.",
      author: "finops.org"
    },
    {
      text: "Use AWS Budgets to set custom cost and usage alerts.",
      author: "AWS Budgets"
    },
    {
      text: "Azure Reservations can save you money on VM usage.",
      author: "Azure Reservations"
    },
    {
      text: "GCP Preemptible VMs are ideal for batch jobs and testing.",
      author: "GCP Preemptible VMs"
    },
    {
      text: "FinOps requires a culture of accountability and transparency.",
      author: "finops.org"
    },
    {
      text: "Optimize database costs by scaling down during off-peak hours.",
      author: "Cloud Database Optimization"
    },
    {
      text: "Use AWS S3 Intelligent-Tiering to save on storage costs.",
      author: "AWS S3"
    },
    {
      text: "Azure Automanage can optimize VM configurations automatically.",
      author: "Azure Automanage"
    },
    {
      text: "GCP's BigQuery slots can be scaled to match workload demands.",
      author: "GCP BigQuery"
    },
    {
      text: "FinOps is about making data-driven decisions for cloud spending.",
      author: "finops.org"
    },
    {
      text: "Use AWS Lambda for serverless computing to pay only for what you use.",
      author: "AWS Lambda"
    },
    {
      text: "Azure Functions are a cost-effective way to run event-driven workloads.",
      author: "Azure Functions"
    },
    {
      text: "GCP Cloud Run scales to zero when not in use, saving costs.",
      author: "GCP Cloud Run"
    },
    {
      text: "FinOps is about balancing speed, cost, and quality.",
      author: "finops.org"
    },
    {
      text: "Use AWS Fargate to avoid over-provisioning container resources.",
      author: "AWS Fargate"
    },
    {
      text: "Azure Kubernetes Service (AKS) can optimize container costs.",
      author: "Azure AKS"
    },
    {
      text: "GCP Kubernetes Engine (GKE) offers cost controls for containerized apps.",
      author: "GCP GKE"
    },
    {
      text: "FinOps is about creating a feedback loop for cloud spending.",
      author: "finops.org"
    },
    {
      text: "Use AWS Cost Anomaly Detection to catch unexpected spending.",
      author: "AWS Cost Anomaly Detection"
    },
    {
      text: "Azure Cost Alerts notify you when spending exceeds thresholds.",
      author: "Azure Cost Alerts"
    },
    {
      text: "GCP Billing Alerts help you stay on top of your cloud budget.",
      author: "GCP Billing Alerts"
    },
    {
      text: "FinOps is about empowering teams to make cost-aware decisions.",
      author: "finops.org"
    },
    {
      text: "Use AWS Compute Optimizer to find optimal instance types.",
      author: "AWS Compute Optimizer"
    },
    {
      text: "Azure Spot Virtual Machines offer significant cost savings.",
      author: "Azure Spot VMs"
    },
    {
      text: "GCP's Custom Machine Types let you tailor VM resources to your needs.",
      author: "GCP Custom VMs"
    },
    {
      text: "FinOps is about creating a culture of continuous improvement.",
      author: "finops.org"
    },
    {
      text: "Use AWS Organizations to manage and optimize multi-account costs.",
      author: "AWS Organizations"
    },
    {
      text: "Azure Management Groups help you organize and optimize resources.",
      author: "Azure Management Groups"
    },
    {
      text: "GCP Folders allow you to group and manage resources efficiently.",
      author: "GCP Resource Management"
    },
    {
      text: "FinOps is about aligning cloud investments with business outcomes.",
      author: "finops.org"
    },
    {
      text: "Use AWS Cost Categories to organize and track spending.",
      author: "AWS Cost Categories"
    },
    {
      text: "Azure Tags help you allocate costs across teams and projects.",
      author: "Azure Tags"
    },
    {
      text: "GCP Labels provide granular cost tracking and reporting.",
      author: "GCP Labels"
    },
    {
      text: "FinOps is about making cloud costs predictable and manageable.",
      author: "finops.org"
    },
    {
      text: "Use AWS Budgets to forecast and plan cloud spending.",
      author: "AWS Budgets"
    },
    {
      text: "Azure Cost Management provides forecasting tools for better planning.",
      author: "Azure Cost Management"
    },
    {
      text: "GCP's Billing Reports include forecasts to help you stay on budget.",
      author: "GCP Billing"
    },
    {
      text: "FinOps is about driving innovation while controlling costs.",
      author: "finops.org"
    },
    {
      text: "Use AWS Cost Explorer to analyze historical spending trends.",
      author: "AWS Cost Explorer"
    },
    {
      text: "Azure Cost Analysis provides insights into your cloud spending.",
      author: "Azure Cost Analysis"
    },
    {
      text: "GCP's Cost Table helps you visualize and analyze costs.",
      author: "GCP Cost Management"
    },
    {
      text: "FinOps is about creating a shared responsibility model for cloud costs.",
      author: "finops.org"
    },
    {
      text: "Use AWS Cost Allocation Tags to track spending by project or team.",
      author: "AWS Cost Allocation"
    },
    {
      text: "Azure Resource Groups help you organize and manage costs.",
      author: "Azure Resource Groups"
    },
    {
      text: "GCP Billing Export allows you to analyze costs in BigQuery.",
      author: "GCP Billing Export"
    },
    {
      text: "FinOps is about enabling faster decision-making with cost insights.",
      author: "finops.org"
    },
    {
      text: "Use AWS Cost and Usage Reports for detailed cost analysis.",
      author: "AWS Cost and Usage Reports"
    },
    {
      text: "Azure Cost Management integrates with Power BI for advanced analytics.",
      author: "Azure Cost Management"
    },
    {
      text: "GCP's Billing API allows you to build custom cost management tools.",
      author: "GCP Billing API"
    },
    {
      text: "FinOps is about creating a culture of cost accountability.",
      author: "finops.org"
    },
    {
      text: "Use AWS Budgets to set custom cost and usage thresholds.",
      author: "AWS Budgets"
    },
    {
      text: "Azure Budgets help you stay on top of your cloud spending.",
      author: "Azure Budgets"
    },
    {
      text: "GCP Budgets allow you to monitor and control costs effectively.",
      author: "GCP Budgets"
    },
    {
      text: "FinOps is about driving business value through cloud efficiency.",
      author: "finops.org"
    },
    {
      text: "Use AWS Cost Explorer to identify underutilized resources.",
      author: "AWS Cost Explorer"
    },
    {
      text: "Azure Advisor provides recommendations for cost optimization.",
      author: "Azure Advisor"
    },
    {
      text: "GCP Recommender offers actionable insights for cost savings.",
      author: "GCP Recommender"
    },
    {
      text: "FinOps is about creating a sustainable cloud cost strategy.",
      author: "finops.org"
    },
    {
      text: "Use AWS Cost Anomaly Detection to catch unexpected spending spikes.",
      author: "AWS Cost Anomaly Detection"
    },
    {
      text: "Azure Cost Alerts notify you when spending exceeds your budget.",
      author: "Azure Cost Alerts"
    },
    {
      text: "GCP Billing Alerts help you stay on top of your cloud costs.",
      author: "GCP Billing Alerts"
    },
    {
      text: "FinOps is about making cloud costs transparent and actionable.",
      author: "finops.org"
    }
  ];
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }