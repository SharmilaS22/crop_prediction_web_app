''' importing modules '''
import numpy as np
import pandas as pd
# from sklearn.neighbors import KNeighborsRegressor

''' get train and test data '''
data = pd.read_csv('./data/crop_data.csv')
test = pd.read_csv('./data/test.csv')

train_data = data.drop(columns=['suitable_crop'])

''' train the model knn '''
# knn = KNeighborsRegressor(n_neighbors = 4).fit(data)

''' predict which cluster it is '''
# knn.predict(test)



'''
--version 1
 1. group similar conditions into clusters (unsupervised)
 2. when data is received, find the most relevant cluster
 3. get all the 'crop_name' for the selected cluster
 4. display all the crop_name


 --version 2
 1. distance between *test_point*(test_data in multi_dimensions) and *each points in the same cluster*
 2. ascending order of distance
 3. display one by one (decreasing)
'''