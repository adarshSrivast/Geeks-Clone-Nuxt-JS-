<template>
    <nav class="navbar">
        <div class="navbar-container">
            <NuxtLink to="/" class="navbar-logo" @click="handleClick">
                <img width="112" height="29" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg" alt="Geeks">
            </NuxtLink>
    

            <div class="navbar-collapse">
                <ul class="navbar-menu">
                    <li class="navbar-menu-dropdown">
                        <NuxtLink to="#">
                            <span>Browse</span>
                            <span>
                                <i class="fa fa-solid fa-angle-down"></i>
                            </span>
                        </NuxtLink>

                        <ul class="dropdown-items">
                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Web Development</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li><NuxtLink class="dropdown-link" to="#"><span>Bootstrap</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to="#"><span>React</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to="#"><span>Graph QL</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to="#"><span>Gatsby</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to="#"><span>Grunt</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to="#"><span>Svelte</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to="#"><span>Meteor</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to="#"><span>HTML5</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to="#"><span>Angular</span></NuxtLink></li>
                                </ul>
                            </li>

                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Design</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li><NuxtLink class="dropdown-link" to=""><span>UX/UI Design</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Figma Design</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Adobe XD</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Sketch</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Icon Design</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Photoshop</span></NuxtLink></li>
                                </ul>
                            </li>

                            <li class="dropdown-items-list">
                                <NuxtLink class="dropdown-link" to="#"><span>Mobile App</span></NuxtLink>
                            </li>

                            <li class="dropdown-items-list">
                                <NuxtLink class="dropdown-link" to="#"><span>IT Software</span></NuxtLink>
                            </li>

                            <li class="dropdown-items-list">
                                <NuxtLink class="dropdown-link" to="#"><span>Marketing</span></NuxtLink>
                            </li>

                            <li class="dropdown-items-list">
                                <NuxtLink class="dropdown-link" to="#"><span>Music</span></NuxtLink>
                            </li>

                            <li class="dropdown-items-list">
                                <NuxtLink class="dropdown-link" to="#"><span>Lifestyle</span></NuxtLink>
                            </li>

                            <li class="dropdown-items-list">
                                <NuxtLink class="dropdown-link" to="#"><span>Business</span></NuxtLink>
                            </li>

                            <li class="dropdown-items-list">
                                <NuxtLink class="dropdown-link" to="#"><span>Photography</span></NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <li class="navbar-menu-dropdown">
                        <NuxtLink to="#">
                            <span>Landings</span>
                            <span>
                                <i class="fa fa-solid fa-angle-down"></i>
                            </span>
                        </NuxtLink>
                        <ul class="dropdown-items">
                            <li>
                                <h4 class="dropdown-header">LANDINGS</h4>
                            </li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Courses</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Lead Course</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Request Access</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>SaaS</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Home Academy</span></NuxtLink></li>
                        </ul>
                    </li>

                    <li class="navbar-menu-dropdown">
                        <NuxtLink to="#">
                            <span>Pages</span>
                            <span>
                                <i class="fa fa-solid fa-angle-down"></i>
                            </span>
                        </NuxtLink>
                        <ul class="dropdown-items">
                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Courses</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li><NuxtLink class="dropdown-link" to=""><span>Courses List/Grid</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Course Category</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Course Single</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Course Single v2</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Course Lesson</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Course Checkout</span></NuxtLink></li>
                                </ul>
                            </li>
                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Paths</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li><NuxtLink class="dropdown-link" to=""><span>Browse Paths</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Path Single</span></NuxtLink></li>
                                </ul>
                            </li>
                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Blog</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li><NuxtLink class="dropdown-link" to=""><span>Listing</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Article</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Category</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Sidebar</span></NuxtLink></li>
                                </ul>
                            </li>
                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Career</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li><NuxtLink class="dropdown-link" to=""><span>Overiew</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Listing</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Opening</span></NuxtLink></li>
                                </ul>
                            </li>
                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Speciality</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li><NuxtLink class="dropdown-link" to=""><span>Coming Soon</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Error 404</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Maintenance Mode</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Terms & Conditions</span></NuxtLink></li>
                                </ul>
                            </li>
                            <li class="dropdown-items-list"><hr></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>About</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Help Center</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Pricing</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Compare Plan</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Contact</span></NuxtLink></li>
                        </ul>
                    </li>

                    <li class="navbar-menu-dropdown">
                        <NuxtLink to="#">
                            <span>Accounts</span>
                            <span>
                                <i class="fa fa-solid fa-angle-down"></i>
                            </span>
                        </NuxtLink>
                        <ul class="dropdown-items">
                            <li class="dropdown-items-list">
                                <h4 class="dropdown-header">ACCOUNTS</h4>
                            </li>
                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Instructor</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li>
                                        <h4 class="dropdown-header"><span>INSTRUCTOR</span></h4>
                                        <p class="dropdown-text">Instructor dashboard for manage courses and earning.</p>
                                    </li>
                                    <li class="dropdown-items-list"><hr class="dropdown-divider"></li>
                                    <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to=""><span>Dashboard</span></NuxtLink></li>
                                    <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to=""><span>Profile</span></NuxtLink></li>
                                    <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to=""><span>My Courses</span></NuxtLink></li>
                                    <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to=""><span>Announcements</span></NuxtLink></li>
                                    <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to=""><span>Withdrawls</span></NuxtLink></li>
                                    <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to=""><span>Reviews</span></NuxtLink></li>
                                    <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to=""><span>Question & Answer</span></NuxtLink></li>
                                </ul>
                            </li>
                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Student</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li>
                                        <h4 class="dropdown-header"><span>STUDENTS</span></h4>
                                        <p class="dropdown-text">Students dashboard to manage your courses and subscriptions</p>
                                    </li>
                                    <li class="dropdown-items-list"><hr class="dropdown-divider"></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Dashboard</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Enrolled Courses</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Wishlist</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Reviews</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Quiz Attempts</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Purchase History</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Payment Methods</span></NuxtLink></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>Edit Addresses</span></NuxtLink></li>
                                </ul>
                            </li>
                            <li class="dropdown-items-list dropdown-has-children">
                                <NuxtLink class="dropdown-link" to="#"><span>Admin</span></NuxtLink>
                                <ul class="dropdown-submenu">
                                    <li>
                                        <h4 class="dropdown-header"> WP Admin</h4>
                                        <p class="dropdown-text">WP admin dashboard to manage courses, user, site setting</p>
                                    </li>
                                    <li class="dropdown-items-list"><hr class="dropdown-divider"></li>
                                    <li><NuxtLink class="dropdown-link" to=""><span>WP Admin Dashboard</span></NuxtLink></li>
                                </ul>
                            </li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Sign In</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Sign Up</span></NuxtLink></li>
                            <li class="dropdown-items-list"><hr></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Lost Password</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Edit Profile</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Security</span></NuxtLink></li>
                            <li class="dropdown-items-list"><NuxtLink class="dropdown-link" to="#"><span>Accont Details</span></NuxtLink></li>
                        </ul>
                    </li>

                    <li class="navbar-menu-dropdown">
                        <NuxtLink to="#">
                            <span>
                                <i class="fa fa-solid fa-ellipsis"></i>
                            </span>
                        </NuxtLink>
                        <ul class="dropdown-items">
                            <li class="dropdown-items-list">
                                <NuxtLink class="dropdown-link" to="#">
                                    <span style="display: block;">Documnetation</span>
                                    <span>Browse the full documentation</span>
                                </NuxtLink>
                            </li>
                            <li class="dropdown-items-list">
                                <NuxtLink class="dropdown-link" to="#">
                                    <span style="display: block;">Changelog v2.2.1</span>
                                    <span>See whats's new</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <Search :courseSearched="courseSearched" @searchStatus="handleSearch"/>

                <div class="navbar-sign-in">
                    <span class="sign-in" style="line-height: 1;">
                        <NuxtLink to="" class="sign-in-link" >Sign In</NuxtLink>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useSearchState } from "../store/search";


const emit = defineEmits(['searchStatus']);
let courseSearched = ref(false);

function handleSearch(search){
    emit('searchStatus', search)
}

function handleClick(){
    const search = useSearchState();
    search.updateSearchState(false);
}


</script>

<style scoped>

.navbar{
    padding: 10px 16px;
    background-color:#f5f4f8;   
}

.navbar-container{
    width: 100%;
    display:flex;
    align-items: center;
}

.navbar-logo{
    margin-right: 16px;
    font-size: 0; 
}

.navbar-collapse{
    width: 100%;
    display: flex;
    align-items: center;
}

.navbar-menu{
    display: flex;
}

.navbar-menu-dropdown i{
    margin-left: 6px;
}

.navbar-menu .navbar-menu-dropdown a{
    color: #18113c;
    font-size: 14px;
    font-weight: 500;
    padding: 4px  8px;
}

.navbar-menu li[class="navbar-menu-dropdown"] {
    position: relative;
    padding: 7px 0px;
}

.navbar-menu-dropdown .dropdown-items{
    display: none;
    position: absolute;
    top: 50px;
    margin: 2px 0px;
    padding: 16px 0px;
    min-width: 184px;
    background-color: white;
    border-radius: 8px;
    transition: position 5s linear;
}

.navbar-menu-dropdown:hover .dropdown-items {
    display: block;
    position: absolute;
    top: 20px;
}

.dropdown-items li{
    position: relative;
}

.dropdown-has-children .dropdown-submenu{
    display: none;
    position: absolute;
    top: 0px;
    left: 100%;
    box-shadow: 0 10px 30px 0 rgba(31, 45, 61, .1);
    min-width: 184px;
    border-radius: 8px;
    background-color: white;
}

.dropdown-has-children:hover .dropdown-submenu{
    display: block;
}


.dropdown-items .dropdown-items-list .dropdown-link{
    font-size: 14px;
    line-height: 28px;
    font-weight: 500;
    color: #18113c;
    padding: 2px 20px;
}

.dropdown-items li:hover{
    background-color: #f5f4f8;
}

.dropdown-items h4:hover,.dropdown-items p:hover{
    background-color: #fff;
}

.dropdown-header{
    color: #a8a3b9;
    padding: 4px 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 500;
}

.dropdown-text{
    padding: 4px 20px;
    color: #a8a3b9;
    font-size:12px;
    line-height: 1.4;
}

.navbar-sign-in{
    margin-left:auto;
}

.sign-in-link{
    display: inline-block;
    font-weight: 600;
    color: #000;
    user-select: none;
    border: 1px solid transparent;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    transition: color .15s ease-in-out;
    box-shadow: 0 1px 3px rgba(3, 0, 71, .09);
}

.sign-in-link:hover{
    color: #000;
}

@media (max-width: 768px) {
    .navbar-collapse{
        display:none;
    }
}

</style>