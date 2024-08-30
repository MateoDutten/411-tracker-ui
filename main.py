import streamlit as st
import pandas as pd
import requests
import time


TABLE_TYPES = [{"timeframe": "year"}, {"timeframe": "month"}, {"timeframe": "week"}]


def get_goals(params):
    _url = "http://localhost:8000/goal"
    r = requests.get(url=_url, params=params)
    return r.json()


def create_goal():
    _url = "http://localhost:8000/goal"
    data = {"name": st.session_state.goal_name,
            "timeframe": st.session_state.timeframe,
            "start_date": st.session_state.goal_start_date}
    r = requests.post(url=_url, data=data)
    print(r)
    return r.text


def goal_table(_type, goals, key):
    st.write(_type["timeframe"])
    st.data_editor(
        pd.DataFrame(goals),
        width=800,
        key=key,
        column_config={
            "Status": st.column_config.CheckboxColumn(
                help="select which goal is **ended**",
                width="small",
                default=False,
            ),
            "Goal Name": st.column_config.Column(
                width="large"
            )},
        disabled=["Goal Name"],
        hide_index=True,
    )


def form_appear():
    with st.form("add_goal_form"):
        st.write("Add Goal")
        st.text_input("Goal Name", key="goal_name")
        st.selectbox("timeframe", ("month", "week", "year"), key="timeframe")
        st.date_input("start date", key="goal_start_date")
        submitted = st.form_submit_button("Submit", on_click=create_goal)
        print(submitted)


def add_goal_button():
    if st.button("Add Goal"):
        form_appear()


for _type in TABLE_TYPES:
    goals_dict = get_goals(_type)
    goal_table(_type, goals_dict, _type)
add_goal_button()
