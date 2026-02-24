// Track currently selected (all )
let currentTab = "all"


// Update dashboard numbers based on job 
function updateCounts() {

    const jobs = document.querySelectorAll(".job")

    const totalCount = document.getElementById("totalCount")
    const interviewCount = document.getElementById("interviewCount")
    const rejectedCount = document.getElementById("rejectedCount")

    let interview = 0
    let rejected = 0

    jobs.forEach(job => {

        if (job.dataset.status === "interview") {
            interview++
        }

        if (job.dataset.status === "rejected") {
            rejected++
        }

    })

    totalCount.textContent = jobs.length
    interviewCount.textContent = interview
    rejectedCount.textContent = rejected

}



// Show jobs depending on the selected tab
function filterJobs() {

    const jobs = document.querySelectorAll(".job")
    const emptyState = document.getElementById("emptyState")
    const jobNumber = document.getElementById("jobNumber")

    let visible = 0
    let total = jobs.length

    jobs.forEach(job => {

        const status = job.dataset.status

        if (currentTab === "all") {

            job.style.display = ""
            visible++

        }

        else if (status === currentTab) {

            job.style.display = ""
            visible++

        }

        else {

            job.style.display = "none"

        }

    })

    if (visible === total) {

        jobNumber.textContent = `${total} jobs`

    }

    else {

        jobNumber.textContent = `${visible} of ${total} jobs`

    }

    // Show no jobs match the filter
    if (visible === 0) {

        emptyState.classList.remove("hidden")

    }

    else {

        emptyState.classList.add("hidden")

    }

}



// Handle tab switching UI
function setupTabs() {

    const tabs = document.querySelectorAll(".tab")

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("tab-active"))

            tab.classList.add("tab-active")

            currentTab = tab.dataset.tab

            filterJobs()

        })

    })

}



// Handle Interview   button actions
function handleButtons() {

    document.addEventListener("click", function (e) {

        const interviewBtn = e.target.closest(".interview")
        const rejectedBtn = e.target.closest(".rejected")
        const deleteBtn = e.target.closest(".delete")



        if (interviewBtn) {

            const card = interviewBtn.closest(".job")
            const badge = card.querySelector(".statusBadge")

            card.dataset.status = "interview"

            badge.textContent = "INTERVIEW"
            badge.className = "badge badge-success badge-outline badge-sm uppercase statusBadge"

            updateCounts()
            filterJobs()

        }


        //Handle Rejected  button actions

        if (rejectedBtn) {

            const card = rejectedBtn.closest(".job")
            const badge = card.querySelector(".statusBadge")

            card.dataset.status = "rejected"

            badge.textContent = "REJECTED"
            badge.className = "badge badge-error badge-outline badge-sm uppercase statusBadge"

            updateCounts()
            filterJobs()

        }


        //Handle Delete button actions

        if (deleteBtn) {

            const card = deleteBtn.closest(".job")

            card.remove()

            updateCounts()
            filterJobs()

        }

    })

}



// Application
function initApp() {

    setupTabs()
    handleButtons()
    updateCounts()
    filterJobs()

}

initApp()