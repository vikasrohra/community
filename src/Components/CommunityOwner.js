const CommunityOwner = () => {
    return (
        <>
            <div class="w-full bg-gray-50 rounded border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 pb-2 mb-1">
                <h5 class="text-2xl font-bold leading-none text-gray-900 dark:text-white">Community Owner</h5>
            </div>
            <div className="w-full bg-gray-50 rounded border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center py-5 px-5">
                    <div className='w-full flex flex-col items-end mb-3 text-gray-700 dark:text-gray-400'>
                        <a href="#"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        </a>
                    </div>
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={require('../Assets/Images/owner.png')} alt="Bonnie image" />
                    <h5 className="mb-0 text-xl font-medium text-gray-900 dark:text-white">Vikas Rohra</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-6">Software Web Developer</span>
                    <div className='inline-flex justify-center space-x-3 mb-4'>
                        <a href="https://github.com/vikasrohra"><i className="fa-brands fa-github fa-xl"></i></a>
                        <a href="https://in.linkedin.com/in/vikas-rohra-1a94a054"><i class="fa-brands fa-linkedin fa-xl text-[#0077B5]"></i></a>
                        <a href="https://www.instagram.com/imvikasrohra/"><i class="fa-brands fa-instagram fa-xl text-[#f7280a]"></i></a>
                        <a href="https://www.youtube.com/channel/UCNRDbYxL0A1KFQwt9X0PgSQ"><i class="fa-brands fa-youtube fa-xl text-[#fe0000]"></i></a>
                        <a href="https://www.findcoder.io/u/vikasrohra">
                            <svg width="36" height="20" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.356678 11.4956C-0.118893 11.2104 -0.118892 10.4976 0.356679 10.2125L14.7197 1.60122C15.4408 1.16889 16.1693 2.15119 15.5826 2.76473L8.34608 10.3321C8.06984 10.6209 8.06984 11.0871 8.34608 11.376L15.5826 18.9433C16.1693 19.5569 15.4408 20.5392 14.7197 20.1068L0.356678 11.4956Z" fill="#2D88E2"></path><path class="fill-black dark:fill-white" d="M8.51066 1.55168C8.23967 1.27027 8.23967 0.824966 8.51066 0.543559C8.7965 0.246733 9.2717 0.246733 9.55753 0.543559L28.7255 20.4483C28.9964 20.7297 28.9964 21.175 28.7255 21.4564C28.4396 21.7533 27.9644 21.7533 27.6786 21.4564L8.51066 1.55168Z"></path><path d="M37.6433 10.2125C38.1189 10.4976 38.1189 11.2104 37.6433 11.4956L23.2803 20.1068C22.5592 20.5392 21.8307 19.5569 22.4174 18.9433L29.6539 11.376C29.9302 11.0871 29.9302 10.6209 29.6539 10.332L22.4174 2.76473C21.8307 2.15118 22.5592 1.16888 23.2803 1.60122L37.6433 10.2125Z" fill="#2D88E2"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityOwner;